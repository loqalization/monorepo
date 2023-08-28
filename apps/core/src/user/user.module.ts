import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
    providers: [UserService, JwtStrategy],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule {}
