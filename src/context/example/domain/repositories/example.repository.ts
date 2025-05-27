import { Example } from '../class/example.entity';

/**
 * Interfaz del repositorio para la entidad Example
 * Define los métodos que debe implementar cualquier repositorio de Example.
 * Esta interfaz es parte del dominio y no depende de la infraestructura.
 */
export interface ExampleRepository {
  /**
   * Busca un Example por su ID
   * @param id ID del Example a buscar
   * @returns Promise con el Example encontrado o null si no existe
   */
  findById(id: number): Promise<Example | null>;

  /**
   * Busca todos los Examples
   * @returns Promise con un array de Examples
   */
  findAll(): Promise<Example[]>;

  /**
   * Guarda un Example
   * @param example Example a guardar
   * @returns Promise con el Example guardado
   */
  save(example: Example): Promise<Example>;
}
