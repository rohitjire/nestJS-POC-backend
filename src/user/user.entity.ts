import { CommentEntity } from 'src/comment/comment.entity';
import { GenericEntity } from 'src/generic/generic.entity';
import { LikeEntity } from 'src/like/like.entity';
import { PostEntity } from 'src/post/post.entity';
import { UserfollowerEntity } from 'src/user-follower/user-follower.enity';
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

  @OneToMany(() => CommentEntity, (comment: CommentEntity) => comment.user, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  comments: CommentEntity[];

  @OneToMany(() => LikeEntity, (like: LikeEntity) => like.user, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  likes: LikeEntity[];

  @OneToMany(
    () => UserfollowerEntity,
    (userFollwer: UserfollowerEntity) => userFollwer.followers,
  )
  followers: UserfollowerEntity[];

  @OneToMany(
    () => UserfollowerEntity,
    (userFollwer: UserfollowerEntity) => userFollwer.following,
  )
  followings: UserfollowerEntity[];
}
