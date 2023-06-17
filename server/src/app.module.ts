import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from 'src/file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TrackModule } from 'src/track/track.module';
import * as path from 'path';

@Module({
  imports: [
    TrackModule,
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://sperman:sperman@cluster0.ktluhv7.mongodb.net/',
    ),
  ],
})
export class AppModule {}
