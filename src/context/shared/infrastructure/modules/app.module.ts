import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import databaseConfig from '../config/environment/database.config';
import { ExampleModule } from '../../../example/infrastructure/module/example.module';
import { ExampleRoutesModule } from '../../../../app/routes/example.routes';

/**
 * Módulo principal de la aplicación.
 * Aquí se importan todos los módulos necesarios para el funcionamiento de la aplicación.
 * Para agregar un nuevo módulo de dominio, importarlo y agregarlo al array de imports.
 */
@Module({
  imports: [
    // Configuración global
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    // Módulo de base de datos
    DatabaseModule,
    // Módulos de dominio
    ExampleModule,
    // Módulos de rutas
    ExampleRoutesModule,
  ],
})
export class AppModule {}
