import {
  Controller,
  Get,
  NotFoundException,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Movie } from './interfaces/movie.interface';
import { MoviedbService } from './moviedb.service';
import { TrendingMediaDto } from './dto/trending-media.dto';
import { QueryMediaDto } from './dto/detail-media.dto';
import { Video } from './interfaces/video-movie.interface';
import { MediaParams } from './interfaces/trending-media-params.interface';
import { PopularMediaDto } from './dto/popular-media.dto';
import { UpcomingMovieDto } from './dto/upcoming-movie.dto';

@Controller('moviedb')
export class MoviedbController {
  constructor(private readonly moviesService: MoviedbService) {}

  private getQueryParams(query: QueryMediaDto): MediaParams {
    return {
      id: query.id,
      mediaType: query.mediaType,
      lang: query.lang || 'en-US',
    };
  }

  @Get('trending')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getTrendingMovies(@Query() query: TrendingMediaDto): Promise<Movie[]> {
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

  @Get('details')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getMovieDetails(@Query() query: QueryMediaDto) {
    const movie = await this.moviesService.getMovieDetails(
      this.getQueryParams(query),
    );
    if (!movie) {
      throw new NotFoundException(
        `No details found for ${query.mediaType} with ID ${query.id}`,
      );
    }
    return movie;
  }

  @Get('images')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getMovieImages(@Query() query: QueryMediaDto) {
    const images = await this.moviesService.getMediaImages(
      this.getQueryParams(query),
    );

    if (!images) {
      throw new NotFoundException(
        `No images found for ${query.mediaType} with ID ${query.id}`,
      );
    }

    return images;
  }

  @Get('videos')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getMediaVideos(@Query() query: QueryMediaDto): Promise<Video> {
    const video = await this.moviesService.getMediaVideos(
      this.getQueryParams(query),
    );

    if (!video) {
      throw new NotFoundException(
        `No videos found for ${query.mediaType} with ID ${query.id}`,
      );
    }
    return video;
  }

  @Get('popular')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getPopularMovies(@Query() query: PopularMediaDto): Promise<Movie[]> {
    return this.moviesService.getPopularMovies(
      query.mediaType,
      query.lang,
      query.page,
    );
  }

  @Get('upcoming')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getUpcomingMovies(@Query() query: UpcomingMovieDto): Promise<Movie[]> {
    return this.moviesService.getUpcomingMovies(query.lang, query.page);
  }
}
