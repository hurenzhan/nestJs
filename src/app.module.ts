import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PostsController } from './modules/posts.controller';
import { PostsModule } from './modules/posts.module';
import { DemoMiddleware } from './core/middlewares/demo.middleware';
import { APP_GUARD } from '@nestjs/core';
import { DemoRolesGuard } from './core/guards/demo-roles.guard';
// import { DemoService } from './modules/providers/demo/demo.service';

@Module({
  imports: [PostsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: DemoRolesGuard
    }
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DemoMiddleware)
      .forRoutes('posts');
  }
}
