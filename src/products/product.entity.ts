import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

// import { Supplier } from '../suppliers/supplier.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: String;

    @Column({ default: true })
    isActive: Boolean;

    // @ManyToOne(type => Supplier, supplier => supplier.products)
    // supplierId: Supplier;
}