import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from 'src/file/file.service';
import { Comment, CommentSchema } from 'src/track/schemas/comment.schema';
import { Track, TrackSchema } from 'src/track/schemas/track.schema';
import { TrackController } from 'src/track/track.controller';
import { TrackService } from 'src/track/track.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService],
})
export class TrackModule {}
