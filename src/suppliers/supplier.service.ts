import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Supplier } from './supplier.entity';
import { SupplierDto } from './dto/supplierDto';
import { UpdateSupplierDto } from './dto/updateSupplierDto';

@Injectable()
export class SupplierService {
    constructor(
        @InjectRepository(Supplier)
        private supplierRepository: Repository<Supplier>
    ) {}

    async create (supplier: SupplierDto): Promise<Supplier> {
        return await this.supplierRepository.save(supplier);
    }

    async getAll (): Promise<Supplier[]> {
        return await this.supplierRepository.find();
    }

    async getOne (id: number): Promise<Supplier> {
        return await this.supplierRepository.findOne(id);
    }

    async update (id: number, payload: UpdateSupplierDto): Promise<Object> {
        try {
            await this.supplierRepository.update(id, payload);
            return {
                message: 'UPDATED'
            }
        }
        catch (error) {
            throw new Error(error);
        }
        
    }
}
