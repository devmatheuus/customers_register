import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsNumberString,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly fullname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @IsNumberString()
  readonly phone: string;
}
