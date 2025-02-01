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
import { Video } from './interfaces/video-moview.interface';

@Controller('moviedb')
export class MoviedbController {
  constructor(private readonly moviesService: MoviedbService) {}

  @Get('trending')
  @UsePipes(new ValidationPipe())
  async getTrendingMovies(@Query() query: TrendingMediaDto): Promise<Movie[]> {
    return this.moviesService.getTrendingMovies({
      mediaType: query.mediaType,
      frequency: query.frequency,
      lang: query.lang || 'en-US',
    });
  }

  @Get('details')
  @UsePipes(new ValidationPipe())
  async getMovieDetails(@Query() query: QueryMediaDto) {
    return this.moviesService.getMovieDetails({
      id: query.id,
      mediaType: query.mediaType,
      lang: query.lang || 'en-US',
    });
  }

  @Get('images')
  @UsePipes(new ValidationPipe())
  async getMovieImages(@Query() query: QueryMediaDto) {
    return this.moviesService.getMediaImages({
      id: query.id,
      mediaType: query.mediaType,
      lang: query.lang || 'en-US',
    });
  }

  @Get('videos')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getMediaVideos(@Query() query: QueryMediaDto): Promise<Video | null> {
    return this.moviesService.getMediaVideos({
      id: query.id,
      mediaType: query.mediaType,
      lang: query.lang || 'en-US',
    });
  }
}
