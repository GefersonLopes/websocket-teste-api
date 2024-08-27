import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProductService } from './project.service';
import { CreateProductInput } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProductService) {}

  @Post()
  create(@Body() createProjectDto: CreateProductInput) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
