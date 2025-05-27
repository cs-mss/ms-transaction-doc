import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO para la creación de un Example
 * Esta clase define la estructura de los datos que se reciben desde el exterior
 * para crear un Example
 */
export class CreateExampleDto {
  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;
}
