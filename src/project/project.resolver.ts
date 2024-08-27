import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Product } from './entities/project.entity';
import { ProductService } from './project.service';
import { CreateProductInput } from './dto/create-project.dto';

const pubSub = new PubSub();

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  async products() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    const newProduct = await this.productService.create(createProductInput);
    pubSub.publish('productAdded', { productAdded: newProduct });
    return newProduct;
  }

  @Subscription(() => Product)
  productAdded() {
    return pubSub.asyncIterator('productAdded');
  }
}
