import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MoviedbModule } from './moviedb/moviedb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MoviedbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
