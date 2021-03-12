import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './product.entity';

import { ProductDto } from './dto/productDto';
import { UpdateProductDto } from './dto/updateProductDto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}
    
    async create(product: ProductDto): Promise<Product> {
        return await this.productsRepository.save(product);
    }

    async getAll(): Promise<Product[]> {
        return await this.productsRepository.find();
    }

    async update(id: number, payload: UpdateProductDto): Promise<object> {
        try {
            await this.productsRepository.update(id, payload);
            return {
                message: "UPDATED"
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
