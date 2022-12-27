import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserfollowerEntity } from './user-follower.enity';

@Module({
  imports: [TypeOrmModule.forFeature([UserfollowerEntity])],
})
export class UserFollowerModule {}
