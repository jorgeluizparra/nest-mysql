import { Controller, Post, Body, Param, Get, Put } from '@nestjs/common';

import { SupplierService } from './supplier.service'

import { Supplier } from './supplier.entity';
import { SupplierDto } from './dto/supplierDto';
import { UpdateSupplierDto } from './dto/updateSupplierDto';

@Controller('suppliers')
export class SupplierController {
    constructor ( private readonly supplierService: SupplierService) {}

    @Post()
    create (@Body() supplier: SupplierDto): Promise<Supplier> {
        return this.supplierService.create(supplier);
    }

    @Get()
    getAll (): Promise<Supplier[]> {
        return this.supplierService.getAll();
    }

    @Get(':id')
    getOne (@Param() id: number): Promise<Supplier> {
        return this.supplierService.getOne(id);
    }

    @Put(':id')
    update (@Param() id: number, @Body() isActive: UpdateSupplierDto): Promise<Object> {
        return this.supplierService.update(id, isActive);
    }
}
