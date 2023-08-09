import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    Name: string;

    @Column()
    phon: string;
   
    
    @ManyToOne(() => Book, (book) => book.student) 
    student: Book; 
    book: any;
    
}
