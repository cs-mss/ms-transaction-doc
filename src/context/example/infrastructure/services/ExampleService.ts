import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { emptyNumber, emptyString } from '@context/shared/utils/empty.utils';
import { CreateExamplePort } from '@context/example/application/ports/create-example.port';
import { FindAllExamplesPort } from '@context/example/application/ports/find-all-examples.port';
import { FindExamplePort } from '@context/example/application/ports/find-example.port';
import { USE_CASE_TOKENS } from '@context/example/application/ports/use-case.tokens';
import { CreateExampleDto } from '../dto/create-example.dto';
import { Example } from '@context/example/domain/class/example.entity';

@Injectable()
export default class ExampleService {
  constructor(
    @Inject(USE_CASE_TOKENS.CREATE_EXAMPLE_USE_CASE)
    private readonly createExample: CreateExamplePort,
    @Inject(USE_CASE_TOKENS.FIND_ALL_EXAMPLES_USE_CASE)
    private readonly getExample: FindExamplePort,
    @Inject(USE_CASE_TOKENS.FIND_ALL_EXAMPLES_USE_CASE)
    private readonly getAllExample: FindAllExamplesPort,
  ) {}

  async findById(ExampleId: number) {
    const Example = await this.getExample.execute(ExampleId);
    if (!Example) {
      throw new NotFoundException(`Example not found with id: ${ExampleId}`);
    }
    return Example;
  }

  async create(dto: CreateExampleDto) {
    const ExampleCreated = await this.createExample.execute(
      this.dtoToDomain(dto),
    );
    if (!ExampleCreated) {
      throw new BadRequestException('Example not created');
    }
    return ExampleCreated;
  }

  async findAll() {
    return await this.getAllExample.execute();
  }

  private dtoToDomain(dto: CreateExampleDto) {
    return new Example(
      emptyNumber(),
      dto.number,
      dto.description,
      dto.date,
      emptyString(),
      emptyString(),
    );
  }
}
