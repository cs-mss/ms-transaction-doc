import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateExampleDto } from '../../context/example/infrastructure/dto/create-example.dto';
import ExampleService from '@context/example/infrastructure/services/ExampleService';

/**
 * Controlador para la API de Example
 * Este controlador expone los endpoints para interactuar con los Examples
 */
@Controller('examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  /**
   * Obtiene un Example por su ID
   * @param id ID del Example a buscar
   * @returns Example encontrado
   */
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.exampleService.findById(Number(id));
  }

  /**
   * Obtiene todos los Examples
   * @returns Array de Examples
   */
  @Get()
  async findAll() {
    return this.exampleService.findAll();
  }

  /**
   * Crea un nuevo Example
   * @param createExampleDto DTO con los datos para crear el Example
   * @returns Example creado
   */
  @Post()
  async create(@Body() createExampleDto: CreateExampleDto) {
    return await this.exampleService.create(createExampleDto);
  }
}
