import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../models/jwtPayload.model';
import { CustomerEntity } from '../../customers/entities/customer.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: authService.returnJwtExtractor(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  public async validate(jwtPayload: JwtPayload): Promise<CustomerEntity> {
    const customer = await this.authService.validateCustomer(jwtPayload);

    if (!customer) {
      throw new UnauthorizedException('Unauthorized.');
    }

    return customer;
  }
}
