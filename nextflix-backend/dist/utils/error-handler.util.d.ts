import { HttpException } from '@nestjs/common';
export declare class ErrorHandler {
    private static readonly logger;
    static handle(error: unknown, message: string): HttpException;
}
