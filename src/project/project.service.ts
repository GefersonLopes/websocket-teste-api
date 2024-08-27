import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/project.entity';
import { CreateProductInput } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  create(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productsRepository.create(createProductInput);
    return this.productsRepository.save(newProduct);
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }

  update(id: number, updateProductInput: UpdateProjectDto) {
    return this.productsRepository.update(id, updateProductInput);
  }
}
