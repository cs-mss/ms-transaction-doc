import { Inject, Injectable } from '@nestjs/common';
import { Example } from '../../domain/class/example.entity';
import { ExampleRepository } from '../../domain/repositories/example.repository';
import { FindAllExamplesPort } from '../ports/find-all-examples.port';
import { REPOSITORY_TOKENS } from '../../domain/repositories/repository.tokens';

/**
 * Implementación del caso de uso para buscar todos los Examples
 */
@Injectable()
export class FindAllExamplesUseCase implements FindAllExamplesPort {
  constructor(
    @Inject(REPOSITORY_TOKENS.EXAMPLE_REPOSITORY)
    private readonly exampleRepository: ExampleRepository,
  ) {}

  /**
   * Ejecuta el caso de uso para buscar todos los Examples
   * @returns Promise con un array de Examples
   */
  async execute(): Promise<Example[]> {
    return this.exampleRepository.findAll();
  }
}
