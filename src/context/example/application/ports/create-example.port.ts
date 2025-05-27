import { Example } from '../../domain/class/example.entity';

/**
 * Puerto de entrada para el caso de uso de creación de un Example
 * Define el contrato que debe implementar cualquier caso de uso de creación de Example
 */
export interface CreateExamplePort {
  /**
   * Ejecuta el caso de uso de creación de un Example
   * @param example Example a crear
   * @returns Promise con el Example creado
   */
  execute(example: Example): Promise<Example>;
}
