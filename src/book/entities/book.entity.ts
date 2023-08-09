import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id:Number;

    @Column()
    Name: string;

    @Column()
    Description: string

    @Column()
    Author: string
    
    @Column()
    Genre: string

    @OneToMany(()=>Student,(student)=>student.book)
    student=Student;
}
