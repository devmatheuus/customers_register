import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsNumberString,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  readonly fullname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(11)
  @IsNumberString()
  readonly phone: string;
}
