import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService extends TypeOrmCrudService<PostEntity> {
  constructor(
    @InjectRepository(PostEntity)
    postRepo: Repository<PostEntity>,
  ) {
    super(postRepo);
  }
}
