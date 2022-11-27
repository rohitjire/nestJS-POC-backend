import { CommentEntity } from 'src/comment/comment.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { PostEntity } from 'src/post/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum Roles {
  user = 'user',
  admin = 'admin',
}

@Entity({ name: 'users' })
export class UserEntity extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  about: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ type: 'enum', enum: Roles, default: Roles.user })
  roles: Roles;

  @OneToMany(() => PostEntity, (post: PostEntity) => post.user)
  posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.post, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  comments: CommentEntity[];
}
