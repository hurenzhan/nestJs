import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../../core/decorators/user.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('login')
    async login (@Body() data: LoginDto) {
        return await this.authService.login(data);
    };

    @Post('test')
    @UseGuards(AuthGuard('jwt'))
    async authTest (@User() user) {
        console.log('user', user);

        return {
            message: 'ok'
        }
    };
}
