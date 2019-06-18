import { Controller, Get, Post, Param, Body, HttpException, HttpStatus, ForbiddenException, UseFilters, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, SetMetadata } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
import { DemoAuthGuard } from '../core/guards/demo-auth.guard';
import { Roles } from '../core/decorators/roles.decorator';
// import { DemoFilter } from '../core/fiters/demo.filter';

@Controller('posts')
// @UseFilters(DemoFilter)
// @UseGuards(DemoAuthGuard)
export class PostsController {
    // private readonly demoService;

    // constructor(demoService: DemoService) {
    //     this.demoService = demoService
    // }

    constructor(private readonly demoService: DemoService) {}

    @Get()
    indexedDB() {
        return this.demoService.findAll();
    }

    @Get(':id')
    show(@Param('id', ParseIntPipe) id) {
        console.log('id', typeof id);
        return [
            {
                title: `Post ${id}`
            }
        ]
    }

    @Post()
    // @UseFilters(DemoFilter)
    @UsePipes(ValidationPipe)
    // @SetMetadata('roles', ['member'])
    @Roles('member')
    store(@Body() post: CreatePostDto) {
        // throw new HttpException('没有权限！', HttpStatus.FORBIDDEN)
        // throw new ForbiddenException('没有权限！');
        // this.demoService.create(post);
    }
}
