import { IsBoolean, IsDefined } from 'class-validator';

export class UpdateProductDto {
    
    @IsDefined()
    @IsBoolean()
    isActive: boolean

}
