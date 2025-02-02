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
exports.TrendingMediaDto = void 0;
const class_validator_1 = require("class-validator");
const media_dto_1 = require("./media.dto");
class TrendingMediaDto {
}
exports.TrendingMediaDto = TrendingMediaDto;
__decorate([
    (0, class_validator_1.IsEnum)(media_dto_1.MediaType, { message: 'mediaType must be either movie, tv, or all' }),
    __metadata("design:type", String)
], TrendingMediaDto.prototype, "mediaType", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(media_dto_1.Frequency, { message: 'frequency must be either day or week' }),
    __metadata("design:type", String)
], TrendingMediaDto.prototype, "frequency", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TrendingMediaDto.prototype, "lang", void 0);
//# sourceMappingURL=trending-media.dto.js.map