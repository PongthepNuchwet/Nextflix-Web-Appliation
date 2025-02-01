import {
  Controller,
  Get,
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
  @UsePipes(new ValidationPipe({ transform: true })) // ✅ Ensures query transformation
  async getTrendingMovies(@Query() query: TrendingMediaDto): Promise<Movie[]> {
    return this.moviesService.getTrendingMovies({
      frequency: query.frequency,
      mediaType: query.mediaType,
      lang: query.lang || 'en-US',
    });
  }

  @Get('details')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getMovieDetails(@Query() query: QueryMediaDto) {
    return this.moviesService.getMovieDetails(this.getQueryParams(query));
  }

  @Get('images')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getMovieImages(@Query() query: QueryMediaDto) {
    return this.moviesService.getMediaImages(this.getQueryParams(query));
  }

  @Get('videos')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getMediaVideos(@Query() query: QueryMediaDto): Promise<Video | null> {
    const video = await this.moviesService.getMediaVideos(
      this.getQueryParams(query),
    );
    return video || null;
  }
}
