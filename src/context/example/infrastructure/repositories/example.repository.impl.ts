import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Example } from '../../domain/class/example.entity';
import { ExampleRepository } from '../../domain/repositories/example.repository';
import { ExampleEntity } from '../entities/example.entity';

/**
 * Implementación del repositorio de Example
 * Esta clase implementa la interfaz ExampleRepository definida en el dominio
 * y utiliza TypeORM para interactuar con la base de datos
 */
@Injectable()
export class ExampleRepositoryImpl implements ExampleRepository {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly exampleRepository: Repository<ExampleEntity>,
  ) {}

  /**
   * Busca un Example por su ID
   * @param id ID del Example a buscar
   * @returns Promise con el Example encontrado o null si no existe
   */
  async findById(id: number): Promise<Example | null> {
    const exampleEntity = await this.exampleRepository.findOne({
      where: { id },
    });

    if (!exampleEntity) {
      return null;
    }

    return exampleEntity.toDomain();
  }

  /**
   * Busca todos los Examples
   * @returns Promise con un array de Examples
   */
  async findAll(): Promise<Example[]> {
    const exampleEntities = await this.exampleRepository.find();
    return exampleEntities.map((entity) => entity.toDomain());
  }

  /**
   * Guarda un Example
   * @param example Example a guardar
   * @returns Promise con el Example guardado
   */
  async save(example: Example): Promise<Example> {
    const exampleEntity = ExampleEntity.fromDomain(example);
    const savedEntity = await this.exampleRepository.save(exampleEntity);
    return savedEntity.toDomain();
  }
}
