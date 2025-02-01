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

@Controller('moviedb')
export class MoviedbController {
  constructor(private readonly moviesService: MoviedbService) {}

  @Get('trending')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getTrendingMovies(@Query() query: TrendingMediaDto): Promise<Movie[]> {
    return this.moviesService.getTrendingMovies({
      mediaType: query.mediaType,
      frequency: query.frequency,
      lang: query.lang || 'en-US',
    });
  }
}
