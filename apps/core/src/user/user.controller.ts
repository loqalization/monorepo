import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('User')
export class UserController {
    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    async profile(@Request() req) {
        return req.user;
    }
}
