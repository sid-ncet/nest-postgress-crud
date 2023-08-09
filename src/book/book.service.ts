import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private bookRepository:Repository<Book>){
  }
  create(createBookDto: CreateBookDto):Promise<Book>{
    let book:Book=new Book();
    book.Name=createBookDto.Name;
    book.Author=createBookDto.Author;
    book.Description=createBookDto.Description;
    book.Genre=createBookDto.Genre;
    return this.bookRepository.save(book)
  }
  findAll() :Promise<Book[]>{
    return this.bookRepository.find();
  }

  findOne(id){
    return this.bookRepository.findOne({where:{id}})
  }
  update(id: number, updateBookDto: UpdateBookDto) {
    let book:Book=new Book();
    book.Name=updateBookDto.Name;
    book.Author=updateBookDto.Author;
    book.Description=updateBookDto.Description;
    book.Genre=updateBookDto.Genre;
    book.id=id;
    return this.bookRepository.save(book)
    
  }

  remove(id: number) {
    return this.bookRepository.delete(id);
  }
}
