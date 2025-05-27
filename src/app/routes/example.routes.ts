import { Module } from '@nestjs/common';
import { ExampleController } from '../controllers/example.controller';
import { ExampleModule } from '../../context/example/infrastructure/module/example.module';

/**
 * Módulo de rutas para Example
 * Este módulo registra el controlador de Example y sus dependencias
 */
@Module({
  imports: [ExampleModule],
  controllers: [ExampleController],
})
export class ExampleRoutesModule {}
