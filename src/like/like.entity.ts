import { CommentEntity } from 'src/comment/comment.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { PostEntity } from 'src/post/post.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Type {
  happy = 'happy',
  sad = 'sad',
  angry = 'angry',
  like = 'like',
  love = 'love',
}

@Entity({ name: 'likes' })
export class LikeEntity extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ enum: Type, type: 'enum', default: Type.like })
  type: string;

  @Column({ type: 'text' })
  body: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.likes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => PostEntity, (post: PostEntity) => post.likes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post: PostEntity;
}
