import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'relation-db',
      autoLoadEntities: true,
      synchronize: true,
     
    }),
    BookModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
