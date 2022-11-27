import { CommentEntity } from 'src/comment/comment.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class PostEntity extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ type: 'text' })
  body: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.posts, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.post, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  comments: CommentEntity[];
}
