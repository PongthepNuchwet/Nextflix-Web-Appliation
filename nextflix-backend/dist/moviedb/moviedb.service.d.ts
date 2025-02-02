import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Movie } from './interfaces/movie.interface';
import { MovieDetail } from './interfaces/detail-movie.interface';
import { MovieImages } from './interfaces/images-movie.interface';
import { MediaParams, TrendingMediaParams } from './interfaces/trending-media-params.interface';
import { Video } from './interfaces/video-movie.interface';
export declare class MoviedbService {
    private readonly httpService;
    private readonly configService;
    private readonly BASE_URL;
    private readonly BEARER_TOKEN;
    private readonly logger;
    constructor(httpService: HttpService, configService: ConfigService);
    private getHeaders;
    private transformMovieData;
    getTrendingMovies(params: TrendingMediaParams): Promise<Movie[]>;
    getMovieDetails(params: MediaParams): Promise<MovieDetail>;
    getMediaImages(params: MediaParams): Promise<MovieImages>;
    getMediaVideos(params: MediaParams): Promise<Video | null>;
}
