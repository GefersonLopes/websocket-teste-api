import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProductService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/project.entity';
import { ProductResolver } from './project.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProjectController],
  providers: [ProductService, ProductResolver],
})
export class ProjectModule {}
