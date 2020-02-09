import { IsString } from 'class-validator';
import { isString } from 'util';

export class CreateHealthentityDTO {
    
    name: string;
    description: string;
}

export type UpdateHealthentityDTO = Partial<CreateHealthentityDTO>;