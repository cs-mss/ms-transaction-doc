import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from '../entities/example.entity';
import { ExampleRepositoryImpl } from '../repositories/example.repository.impl';
import { FindExampleUseCase } from '../../application/use-cases/find-example.use-case';
import { FindAllExamplesUseCase } from '../../application/use-cases/find-all-examples.use-case';
import { CreateExampleUseCase } from '../../application/use-cases/create-example.use-case';
import { USE_CASE_TOKENS } from '../../application/ports/use-case.tokens';
import { REPOSITORY_TOKENS } from '../../domain/repositories/repository.tokens';
import ExampleService from '../services/ExampleService';

/**
 * Módulo de Example
 * Este módulo configura todas las dependencias necesarias para el contexto de Example
 */
@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  providers: [
    // Repositorio
    {
      provide: REPOSITORY_TOKENS.EXAMPLE_REPOSITORY,
      useClass: ExampleRepositoryImpl,
    },
    // Casos de uso
    {
      provide: USE_CASE_TOKENS.FIND_EXAMPLE_USE_CASE,
      useClass: FindExampleUseCase,
    },
    {
      provide: USE_CASE_TOKENS.FIND_ALL_EXAMPLES_USE_CASE,
      useClass: FindAllExamplesUseCase,
    },
    {
      provide: USE_CASE_TOKENS.CREATE_EXAMPLE_USE_CASE,
      useClass: CreateExampleUseCase,
    },
    // Instancias directas para inyección
    ExampleService,
    FindExampleUseCase,
    FindAllExamplesUseCase,
    CreateExampleUseCase,
  ],
  exports: [
    ExampleService,
    REPOSITORY_TOKENS.EXAMPLE_REPOSITORY,
    USE_CASE_TOKENS.FIND_EXAMPLE_USE_CASE,
    USE_CASE_TOKENS.FIND_ALL_EXAMPLES_USE_CASE,
    USE_CASE_TOKENS.CREATE_EXAMPLE_USE_CASE,
  ],
})
export class ExampleModule {}
