import { Injectable } from '@nestjs/common';
import { Validation } from 'utils';

@Injectable()
export class AppService {
    getHello(): string {
        console.log(Validation.isEmail('qwe'));
        return 'Hello World!';
    }
}
