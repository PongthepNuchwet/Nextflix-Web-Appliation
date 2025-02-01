import { IsEnum, IsString } from 'class-validator';
import { Frequency, MediaType } from './media.dto';

export class TrendingMediaDto {
  @IsEnum(MediaType, { message: 'mediaType must be either movie, tv, or all' })
  mediaType: MediaType;

  @IsEnum(Frequency, { message: 'frequency must be either day or week' })
  frequency: Frequency;

  @IsString()
  lang: string;
}
