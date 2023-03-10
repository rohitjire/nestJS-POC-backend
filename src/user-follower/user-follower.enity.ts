import { GenericEntity } from 'src/generic/generic.entity';
import { UserEntity } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Status {
  blocked = 'blocked',
  accepted = 'accepted',
  pending = 'pending',
}

@Entity({ name: 'user_followers' })
export class UserfollowerEntity extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.followers)
  @JoinColumn({ name: 'followers_id' })
  followers: UserEntity[];

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.followings)
  @JoinColumn({ name: 'following_id' })
  following: UserEntity[];

  @Column({ type: 'enum', enum: Status, default: Status.pending })
  status: Status;
}
