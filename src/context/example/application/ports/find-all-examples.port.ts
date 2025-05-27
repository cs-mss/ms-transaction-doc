import { Example } from '../../domain/class/example.entity';

/**
 * Puerto de entrada para el caso de uso de búsqueda de todos los Examples
 * Define el contrato que debe implementar cualquier caso de uso de búsqueda de todos los Examples
 */
export interface FindAllExamplesPort {
  /**
   * Ejecuta el caso de uso de búsqueda de todos los Examples
   * @returns Promise con un array de Examples
   */
  execute(): Promise<Example[]>;
}
