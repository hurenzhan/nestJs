import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';
import { UserModule } from '../user/user.module';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('longtext', {nullable: true})
    body: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    update: Date;

    @ManyToOne(type => User, user => user.posts)
    user: UserModule;

    @ManyToMany(type => User, user => user.voted)
    liked: User[];

    @ManyToOne(type => Category, category => category.posts)
    category: Category;
}