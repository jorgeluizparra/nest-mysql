import { Controller, Body, Post, Get, Put, Param } from '@nestjs/common';

import { ProductService } from './product.service'
import { ProductDto } from './dto/productDto';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    create (@Body() product: ProductDto ) {
        if (product.name) {
            return this.productService.create(product);
        }
    }

    @Get()
    getAll () {
        return this.productService.getAll();
    }

    @Put(':id')
    update (@Param() id: number, @Body() isActive: boolean) {
        return this.productService.update(id, {isActive});
    }

}
