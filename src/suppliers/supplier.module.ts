import { Module } from '@nestjs/common';

import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';

@Module({
    imports: [
        
    ],
    exports: [

    ],
    controllers: [
        SupplierController,
    ],
    providers: [
        SupplierService,
    ],
})
export class SupplierModule { }
