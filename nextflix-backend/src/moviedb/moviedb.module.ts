import { Module } from '@nestjs/common';
import { MoviedbController } from './moviedb.controller';
import { MoviedbService } from './moviedb.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MoviedbController],
  providers: [MoviedbService],
})
export class MoviedbModule {}
