import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Product } from '../products/product.entity';

@Entity()
export class Supplier {
    
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name: String;

    @Column({ default: true })
    isActive: Boolean;

    // @OneToMany(type => Product, product => product.supplierId)
    // products: Product[];
}