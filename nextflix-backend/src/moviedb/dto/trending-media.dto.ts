import { IsEnum, IsString } from 'class-validator';

export enum MediaType {
  MOVIE = 'movie',
  TV = 'tv',
  ALL = 'all',
}

export enum Frequency {
  DAY = 'day',
  WEEK = 'week',
}

export class TrendingMediaDto {
  @IsEnum(MediaType, { message: 'mediaType must be either movie, tv, or all' })
  mediaType: MediaType;

  @IsEnum(Frequency, { message: 'frequency must be either day or week' })
  frequency: Frequency;

  @IsString()
  lang: string;
}
