import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Example } from '../../domain/class/example.entity';

/**
 * Entidad de infraestructura para Example
 * Esta clase es la representación de la entidad Example en la base de datos
 */
@Entity('example')
export class ExampleEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: string;

  /**
   * Convierte la entidad de infraestructura a una entidad de dominio
   * @returns Entidad de dominio Example
   */
  toDomain(): Example {
    return new Example(
      this.id,
      this.number,
      this.description,
      this.date,
      this.createdAt,
      this.updatedAt,
    );
  }

  /**
   * Crea una entidad de infraestructura a partir de una entidad de dominio
   * @param example Entidad de dominio Example
   * @returns Entidad de infraestructura ExampleEntity
   */
  static fromDomain(example: Example): ExampleEntity {
    const exampleEntity = new ExampleEntity();
    exampleEntity.id = example.id;
    exampleEntity.number = example.number;
    exampleEntity.date = example.date;
    exampleEntity.description = example.description;
    return exampleEntity;
  }
}
