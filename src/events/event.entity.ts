import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    description: string;

    @Column()
    when: string;

    @Column()
    address: string;

}