import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity } from 'typeorm';
import { Book } from './entities/book.entity';
import { Student } from './entities/student.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Book,Student])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
