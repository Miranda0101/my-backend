import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('categories')
  findAllCategories() {
    return 'This action returns all categories';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
    // return `This action returns product with ID ${id}`;
  }

  //   @Get()
  //   filteredProducts(@Query() query) {
  //     const { name, price } = query;
  //     return `This action returns products with filter conditions name: ${name}, price: ${price}`;
  //   }

  @Get()
  findAll() {
    return this.productsService.findAll();
    // return 'This action returns all products';
    // res.status(410).send('This action is not supported');
  }

  @Post('create')
  //   @HttpCode(HttpStatus.GONE)
  createNew(@Body() body) {
    return body;
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() body) {
    return `This action will update the product with ID ${id} and info ${body}`;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return `This action will delete the product with ID ${id}`;
  }
}
