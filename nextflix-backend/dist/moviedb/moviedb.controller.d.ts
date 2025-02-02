import { Movie } from './interfaces/movie.interface';
import { MoviedbService } from './moviedb.service';
import { TrendingMediaDto } from './dto/trending-media.dto';
import { QueryMediaDto } from './dto/detail-media.dto';
import { Video } from './interfaces/video-movie.interface';
export declare class MoviedbController {
    private readonly moviesService;
    constructor(moviesService: MoviedbService);
    private getQueryParams;
    getTrendingMovies(query: TrendingMediaDto): Promise<Movie[]>;
    getMovieDetails(query: QueryMediaDto): Promise<import("./interfaces/detail-movie.interface").MovieDetail>;
    getMovieImages(query: QueryMediaDto): Promise<import("./interfaces/images-movie.interface").MovieImages>;
    getMediaVideos(query: QueryMediaDto): Promise<Video | null>;
}
