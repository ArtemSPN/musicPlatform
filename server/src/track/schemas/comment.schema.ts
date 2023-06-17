import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Track } from 'src/track/schemas/track.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  track: Track;

  @Prop()
  username: string;

  @Prop()
  text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
