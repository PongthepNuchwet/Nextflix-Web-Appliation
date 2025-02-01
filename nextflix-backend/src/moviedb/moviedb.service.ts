import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Movie, TrendingApiResponse } from './interfaces/movie.interface';
import { ErrorHandler } from 'src/utils/error-handler.util';
import { MovieDetail } from './interfaces/detail-movie.interface';
import { MovieImages, Image } from './interfaces/images-movie.interface';

import {
  MediaParams,
  TrendingMediaParams,
} from './interfaces/trending-media-params.interface';
import { MovieVideos, Video } from './interfaces/video-movie.interface';

@Injectable()
export class MoviedbService {
  private readonly BASE_URL: string;
  private readonly BEARER_TOKEN: string;
  private readonly logger = new Logger(MoviedbService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.BASE_URL = this.configService.get<string>('TMDB_BASE_URL') || '';
    this.BEARER_TOKEN =
      this.configService.get<string>('TMDB_BEARER_TOKEN') || '';
  }

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.BEARER_TOKEN}`,
      Accept: 'application/json',
    };
  }

  private transformMovieData(movie: Movie): Movie {
    return {
      ...movie,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop_path: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
    };
  }

  async getTrendingMovies(params: TrendingMediaParams): Promise<Movie[]> {
    const url = `${this.BASE_URL}/trending/${params.mediaType}/${params.frequency}?language=${params.lang}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get<TrendingApiResponse>(url, {
          headers: this.getHeaders(),
        }),
      );

      return response.data.results.map((movie) =>
        this.transformMovieData(movie),
      );
    } catch (error) {
      throw ErrorHandler.handle(error, 'Failed to fetch trending movies');
    }
  }

  async getMovieDetails(params: MediaParams): Promise<MovieDetail> {
    const url = `${this.BASE_URL}/${params.mediaType}/${params.id}?language=${params.lang}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get<MovieDetail>(url, {
          headers: this.getHeaders(),
        }),
      );

      const movie = response.data;

      return {
        ...movie,
        poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
      };
    } catch (error) {
      throw ErrorHandler.handle(
        error,
        `Failed to fetch ${params.mediaType} details for ID: ${params.id}`,
      );
    }
  }

  async getMediaImages(params: MediaParams): Promise<MovieImages> {
    const url = `${this.BASE_URL}/${params.mediaType}/${params.id}/images?include_image_language=${params.lang}&language=${params.lang}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get<MovieImages>(url, { headers: this.getHeaders() }),
      );

      const transformImagePath = (image: Image): Image => ({
        ...image,
        file_path: `https://image.tmdb.org/t/p/original${image.file_path}`,
      });

      return {
        id: response.data.id,
        backdrops: response.data.backdrops.map(transformImagePath),
        logos: response.data.logos.map(transformImagePath),
        posters: response.data.posters.map(transformImagePath),
      };
    } catch (error) {
      throw ErrorHandler.handle(
        error,
        `Failed to fetch images for ${params.mediaType} ID: ${params.id}`,
      );
    }
  }

  async getMediaVideos(params: MediaParams): Promise<Video | null> {
    const url = `${this.BASE_URL}/${params.mediaType}/${params.id}/videos`;

    try {
      const response = await firstValueFrom(
        this.httpService.get<MovieVideos>(url, { headers: this.getHeaders() }),
      );

      this.logger.debug(response.data);

      const filteredVideos = response.data.results
        .filter((video) => video.type === 'Teaser' && video.site === 'YouTube')
        .map((video) => ({
          ...video,
          key: `https://www.youtube.com/watch?v=${video.key}`,
        }));

      return filteredVideos.length > 0 ? filteredVideos[0] : null;
    } catch (error) {
      throw ErrorHandler.handle(
        error,
        `Failed to fetch teaser videos for ${params.mediaType} ID: ${params.id}`,
      );
    }
  }
}
