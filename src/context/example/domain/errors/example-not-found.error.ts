/**
 * Error de dominio para cuando no se encuentra un Example
 * Los errores de dominio son específicos del contexto de negocio
 * y no dependen de la infraestructura.
 */
export class ExampleNotFoundError extends Error {
  constructor(id: string) {
    super(`Example with id ${id} not found`);
    this.name = 'ExampleNotFoundError';
  }
}
