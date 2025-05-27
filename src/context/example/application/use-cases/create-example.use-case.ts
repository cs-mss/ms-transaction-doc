import { Inject, Injectable } from '@nestjs/common';
import { Example } from '../../domain/class/example.entity';
import { ExampleRepository } from '../../domain/repositories/example.repository';
import { CreateExamplePort } from '../ports/create-example.port';
import { REPOSITORY_TOKENS } from '../../domain/repositories/repository.tokens';

/**
 * Implementación del caso de uso para crear un Example
 */
@Injectable()
export class CreateExampleUseCase implements CreateExamplePort {
  constructor(
    @Inject(REPOSITORY_TOKENS.EXAMPLE_REPOSITORY)
    private readonly exampleRepository: ExampleRepository,
  ) {}

  /**
   * Ejecuta el caso de uso para crear un Example
   * @param example Example a crear
   * @returns Promise con el Example creado
   */
  async execute(example: Example): Promise<Example> {
    return this.exampleRepository.save(example);
  }
}
