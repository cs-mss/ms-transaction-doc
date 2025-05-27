import { Example } from '../../domain/class/example.entity';

/**
 * Puerto de entrada para el caso de uso de búsqueda de un Example
 * Define el contrato que debe implementar cualquier caso de uso de búsqueda de Example
 */
export interface FindExamplePort {
  /**
   * Ejecuta el caso de uso de búsqueda de un Example por su ID
   * @param id ID del Example a buscar
   * @returns Promise con el Example encontrado
   */
  execute(id: number): Promise<Example>;
}
