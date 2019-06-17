import { Controller, Get, Post, Param, Body, HttpException, HttpStatus, ForbiddenException, UseFilters } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';
// import { DemoFilter } from '../core/fiters/demo.filter';

@Controller('posts')
// @UseFilters(DemoFilter)
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
    show(@Param() params) {
        return [
            {
                title: `Post ${params.id}`
            }
        ]
    }

    @Post()
    // @UseFilters(DemoFilter)
    store(@Body() post: CreatePostDto) {
        // throw new HttpException('没有权限！', HttpStatus.FORBIDDEN)
        throw new ForbiddenException('没有权限！');
        // this.demoService.create(post);
    }
}
