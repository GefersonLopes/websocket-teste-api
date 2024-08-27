import { PartialType } from '@nestjs/mapped-types';
import { CreateProductInput } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProductInput) {}
