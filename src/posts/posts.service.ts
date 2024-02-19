import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PostsService {

  constructor(
    @InjectModel(Post)
    private postRepository: typeof Post,
  ) {}

  create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto as any);
  }

  findAll() {
    return this.postRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
