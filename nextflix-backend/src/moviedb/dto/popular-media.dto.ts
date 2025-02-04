import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class PopularMediaDto {
  @IsEnum(['movie', 'tv'], {
    message: 'mediaType must be either "movie" or "tv"',
  })
  mediaType: 'movie' | 'tv';

  @IsString({ message: 'lang must be a string' })
  lang: string;

  @IsOptional()
  @Transform(
    ({ value }) => (typeof value === 'string' ? parseInt(value, 10) : 1),
    { toClassOnly: true },
  )
  @IsInt({ message: 'page must be a number' })
  @Min(1, { message: 'page must be at least 1' })
  page?: number = 1;
}
