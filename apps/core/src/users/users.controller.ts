import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async profile(@Request() req) {
        return req.user;
    }
}
