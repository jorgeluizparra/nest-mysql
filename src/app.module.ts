import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './products/product.module';
import { Product } from './products/product.entity';

import { SupplierModule } from './suppliers/supplier.module';
import { Supplier } from './suppliers/supplier.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'stock_manager',
      entities: [
        Product,
        Supplier
      ],
      synchronize: true,
    }),
    ProductModule,
    SupplierModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
