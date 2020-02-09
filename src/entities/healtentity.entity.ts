import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from "typeorm";

@Entity('HealtEntity')
export class HealtEntity {

    @PrimaryGeneratedColumn()
    id: string;
    @CreateDateColumn()
    created: Date;
    @Column('text')
    name: string;
    @Column('text')
    description: string;

}