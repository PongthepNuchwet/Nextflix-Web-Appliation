"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
class ErrorHandler {
    static handle(error, message) {
        if (error instanceof axios_1.AxiosError) {
            this.logger.error(`Axios Error: ${message}: ${error.message}`, error.response?.data);
            throw new common_1.HttpException(message || error.message, error.response?.status || common_1.HttpStatus.BAD_REQUEST);
        }
        this.logger.error(`Unknown error: ${message}`, error);
        throw new common_1.HttpException(new Error('An unknown error occurred'), common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.ErrorHandler = ErrorHandler;
ErrorHandler.logger = new common_1.Logger(ErrorHandler.name);
//# sourceMappingURL=error-handler.util.js.map