import { IsEnum, IsString } from 'class-validator';
import { MediaType } from './media.dto';

export class QueryMediaDto {
  @IsEnum(MediaType, { message: 'mediaType must be either movie, tv, or all' })
  mediaType: MediaType;

  @IsString()
  lang: string;

  @IsString()
  id: number;
}
