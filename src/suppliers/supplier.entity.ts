import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

import { Product } from '../products/product.entity';

@Entity()
export class Supplier {
    
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column({ default: true })
    isActive: Boolean;

    @ManyToMany(type => Product, product => product.suppliers)
    products: Product[];
}