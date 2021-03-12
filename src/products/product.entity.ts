import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { Supplier } from '../suppliers/supplier.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column({ default: true })
    isActive: Boolean;

    @ManyToMany(type => Supplier, supplier => supplier.products)
    @JoinTable()
    suppliers: Supplier[];
}