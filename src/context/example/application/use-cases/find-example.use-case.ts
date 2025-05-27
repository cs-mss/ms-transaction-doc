import { Inject, Injectable } from '@nestjs/common';
import { Example } from '../../domain/class/example.entity';
import { ExampleRepository } from '../../domain/repositories/example.repository';
import { FindExamplePort } from '../ports/find-example.port';
import { ExampleNotFoundError } from '../../domain/errors/example-not-found.error';
import { REPOSITORY_TOKENS } from '../../domain/repositories/repository.tokens';

/**
 * Implementación del caso de uso para buscar un Example por su ID
 */
@Injectable()
export class FindExampleUseCase implements FindExamplePort {
  constructor(
    @Inject(REPOSITORY_TOKENS.EXAMPLE_REPOSITORY)
    private readonly exampleRepository: ExampleRepository,
  ) {}

  /**
   * Ejecuta el caso de uso para buscar un Example por su ID
   * @param id ID del Example a buscar
   * @returns Promise con el Example encontrado
   * @throws ExampleNotFoundError si no se encuentra el Example
   */

  async execute(id: number): Promise<Example> {
    const example = await this.exampleRepository.findById(id);

    if (!example) {
      throw new ExampleNotFoundError(id.toString());
    }

    return example;
  }
}
