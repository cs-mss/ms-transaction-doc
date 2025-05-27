/**
 * Entidad de dominio Example
 * Esta es una clase de ejemplo que representa una entidad en el dominio.
 * Las entidades de dominio contienen la lógica de negocio y son independientes de la infraestructura.
 */
export class Example {
  constructor(
    readonly id: number,
    readonly number: string,
    readonly description: string,
    readonly date: Date,
    readonly createdAt: string,
    readonly updatedAt: string,
  ) {}
}
