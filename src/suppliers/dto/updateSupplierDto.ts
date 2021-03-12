import { IsDefined, IsBoolean } from 'class-validator';

export class UpdateSupplierDto {
    @IsDefined()
    @IsBoolean()
    isActive?: boolean;
}