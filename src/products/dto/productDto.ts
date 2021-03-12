import { IsNotEmpty, IsOptional, IsBoolean, IsInt } from 'class-validator';

export class ProductDto {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}