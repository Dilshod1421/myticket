import { HttpException, HttpStatus } from '@nestjs/common'

export class ValidationException extends HttpException {
    message: any;
    constructor(response: string | Record<string, any>) {
        super(response, HttpStatus.BAD_REQUEST);
        this.message = response;
    }
}