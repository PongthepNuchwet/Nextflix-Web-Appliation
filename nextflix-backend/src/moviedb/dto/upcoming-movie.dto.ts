import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpcomingMovieDto {
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
