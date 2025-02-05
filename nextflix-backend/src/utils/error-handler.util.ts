import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';

export class ErrorHandler {
  private static readonly logger = new Logger(ErrorHandler.name);

  static handle(error: unknown, message: string): HttpException {
    if (error instanceof AxiosError) {
      this.logger.error(
        `Axios Error: ${message}: ${error.message}`,
        error.response?.data,
      );

      throw new HttpException(
        message || error.message,
        error.response?.status || HttpStatus.BAD_REQUEST,
      );
    }

    this.logger.error(`Unknown error: ${message}`, error);
    throw new HttpException(
      new Error('An unknown error occurred'),
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
