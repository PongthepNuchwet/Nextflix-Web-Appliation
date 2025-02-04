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
var MoviedbService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviedbService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const error_handler_util_1 = require("../utils/error-handler.util");
let MoviedbService = MoviedbService_1 = class MoviedbService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
        this.logger = new common_1.Logger(MoviedbService_1.name);
        this.BASE_URL = this.configService.get('TMDB_BASE_URL') || '';
        this.BEARER_TOKEN =
            this.configService.get('TMDB_BEARER_TOKEN') || '';
    }
    getHeaders() {
        return {
            Authorization: `Bearer ${this.BEARER_TOKEN}`,
            Accept: 'application/json',
        };
    }
    transformMovieData(movie) {
        return {
            ...movie,
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop_path: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
        };
    }
    async getTrendingMovies(params) {
        const url = `${this.BASE_URL}/trending/${params.mediaType}/${params.frequency}?language=${params.lang}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                headers: this.getHeaders(),
            }));
            return response.data.results.map((movie) => this.transformMovieData(movie));
        }
        catch (error) {
            throw error_handler_util_1.ErrorHandler.handle(error, 'Failed to fetch trending movies');
        }
    }
    async getMovieDetails(params) {
        const url = `${this.BASE_URL}/${params.mediaType}/${params.id}?language=${params.lang}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                headers: this.getHeaders(),
            }));
            const movie = response.data;
            return {
                ...movie,
                poster_path: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`,
                backdrop_path: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
            };
        }
        catch (error) {
            throw error_handler_util_1.ErrorHandler.handle(error, `Failed to fetch ${params.mediaType} details for ID: ${params.id}`);
        }
    }
    async getMediaImages(params) {
        const url = `${this.BASE_URL}/${params.mediaType}/${params.id}/images?include_image_language=${params.lang}&language=${params.lang}`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers: this.getHeaders() }));
            const transformImagePath = (image) => ({
                ...image,
                file_path: `https://image.tmdb.org/t/p/original${image.file_path}`,
            });
            return {
                id: response.data.id,
                backdrops: response.data.backdrops.map(transformImagePath),
                logos: response.data.logos.map(transformImagePath),
                posters: response.data.posters.map(transformImagePath),
            };
        }
        catch (error) {
            throw error_handler_util_1.ErrorHandler.handle(error, `Failed to fetch images for ${params.mediaType} ID: ${params.id}`);
        }
    }
    async getMediaVideos(params) {
        const url = `${this.BASE_URL}/${params.mediaType}/${params.id}/videos`;
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { headers: this.getHeaders() }));
            this.logger.debug(response.data);
            const filteredVideos = response.data.results.filter((video) => video.type === 'Teaser' && video.site === 'YouTube');
            return filteredVideos.length > 0 ? filteredVideos[0] : null;
        }
        catch (error) {
            throw error_handler_util_1.ErrorHandler.handle(error, `Failed to fetch teaser videos for ${params.mediaType} ID: ${params.id}`);
        }
    }
};
exports.MoviedbService = MoviedbService;
exports.MoviedbService = MoviedbService = MoviedbService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], MoviedbService);
//# sourceMappingURL=moviedb.service.js.map