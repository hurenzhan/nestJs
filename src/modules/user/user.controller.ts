import { Controller, Post, Put, Body, Param, Get, UseInterceptors, ClassSerializerInterceptor, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { async } from 'rxjs/internal/scheduler/async';
import { UserDto, UpdatePasswordDto } from './user.dto';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post()
    async store(@Body() data: UserDto) {
        return await this.userService.store(data);
    };

    @Get(':id')
    @UseInterceptors(ClassSerializerInterceptor)
    async show(@Param() id: string) {
        return await this.userService.show(id);
    };

    @Put(':id/password')
    @UseInterceptors(ClassSerializerInterceptor)
    async updatePassword(@Param('id') id: string, @Body() data: UpdatePasswordDto) {
        return await this.userService.updatePassword(id, data);
    };

    @Get(':id/liked')
    @UseInterceptors(ClassSerializerInterceptor)
    async like(@Param('id', ParseIntPipe) id: number) {
        return this.userService.liked(id);
    }
}
