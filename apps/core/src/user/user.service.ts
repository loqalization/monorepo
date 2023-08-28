import { Injectable } from '@nestjs/common';
import { User } from './types';

// This should be a real class/interface representing a user entity

@Injectable()
export class UserService {
    private readonly User = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.User.find((user) => user.username === username);
    }
}
