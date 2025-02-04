"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularMediaDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PopularMediaDto {
    constructor() {
        this.page = 1;
    }
}
exports.PopularMediaDto = PopularMediaDto;
__decorate([
    (0, class_validator_1.IsEnum)(['movie', 'tv'], {
        message: 'mediaType must be either "movie" or "tv"',
    }),
    __metadata("design:type", String)
], PopularMediaDto.prototype, "mediaType", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'lang must be a string' }),
    __metadata("design:type", String)
], PopularMediaDto.prototype, "lang", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? parseInt(value, 10) : 1), { toClassOnly: true }),
    (0, class_validator_1.IsInt)({ message: 'page must be a number' }),
    (0, class_validator_1.Min)(1, { message: 'page must be at least 1' }),
    __metadata("design:type", Number)
], PopularMediaDto.prototype, "page", void 0);
//# sourceMappingURL=popular-media.dto.js.map