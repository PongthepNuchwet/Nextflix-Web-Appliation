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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviedbController = void 0;
const common_1 = require("@nestjs/common");
const moviedb_service_1 = require("./moviedb.service");
const trending_media_dto_1 = require("./dto/trending-media.dto");
const detail_media_dto_1 = require("./dto/detail-media.dto");
const popular_media_dto_1 = require("./dto/popular-media.dto");
const upcoming_movie_dto_1 = require("./dto/upcoming-movie.dto");
let MoviedbController = class MoviedbController {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    getQueryParams(query) {
        return {
            id: query.id,
            mediaType: query.mediaType,
            lang: query.lang || 'en-US',
        };
    }
    async getTrendingMovies(query) {
        const movies = await this.moviesService.getTrendingMovies({
            frequency: query.frequency,
            mediaType: query.mediaType,
            lang: query.lang || 'en-US',
        });
        const sortedMovies = movies.sort((a, b) => b.popularity - a.popularity);
        return sortedMovies.map((movie, index) => ({
            ...movie,
            ranking: index + 1,
        }));
    }
    async getMovieDetails(query) {
        return this.moviesService.getMovieDetails(this.getQueryParams(query));
    }
    async getMovieImages(query) {
        return this.moviesService.getMediaImages(this.getQueryParams(query));
    }
    async getMediaVideos(query) {
        const video = await this.moviesService.getMediaVideos(this.getQueryParams(query));
        return video || null;
    }
    async getPopularMovies(query) {
        return this.moviesService.getPopularMovies(query.mediaType, query.lang, query.page);
    }
    async getUpcomingMovies(query) {
        return this.moviesService.getUpcomingMovies(query.lang, query.page);
    }
};
exports.MoviedbController = MoviedbController;
__decorate([
    (0, common_1.Get)('trending'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trending_media_dto_1.TrendingMediaDto]),
    __metadata("design:returntype", Promise)
], MoviedbController.prototype, "getTrendingMovies", null);
__decorate([
    (0, common_1.Get)('details'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_media_dto_1.QueryMediaDto]),
    __metadata("design:returntype", Promise)
], MoviedbController.prototype, "getMovieDetails", null);
__decorate([
    (0, common_1.Get)('images'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_media_dto_1.QueryMediaDto]),
    __metadata("design:returntype", Promise)
], MoviedbController.prototype, "getMovieImages", null);
__decorate([
    (0, common_1.Get)('videos'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [detail_media_dto_1.QueryMediaDto]),
    __metadata("design:returntype", Promise)
], MoviedbController.prototype, "getMediaVideos", null);
__decorate([
    (0, common_1.Get)('popular'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [popular_media_dto_1.PopularMediaDto]),
    __metadata("design:returntype", Promise)
], MoviedbController.prototype, "getPopularMovies", null);
__decorate([
    (0, common_1.Get)('upcoming'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upcoming_movie_dto_1.UpcomingMovieDto]),
    __metadata("design:returntype", Promise)
], MoviedbController.prototype, "getUpcomingMovies", null);
exports.MoviedbController = MoviedbController = __decorate([
    (0, common_1.Controller)('moviedb'),
    __metadata("design:paramtypes", [moviedb_service_1.MoviedbService])
], MoviedbController);
//# sourceMappingURL=moviedb.controller.js.map