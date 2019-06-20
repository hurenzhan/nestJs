import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Body } from '@nestjs/common';
import { create } from 'domain';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('longtext')
    Body: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    update: Date;
}