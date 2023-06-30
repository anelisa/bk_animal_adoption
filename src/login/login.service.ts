import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';
import { TutorService } from 'src/tutor/tutor.service';

@Injectable()
export class LoginService {
  constructor(
    private tutorService: TutorService,
    private jwtService: JwtService,
  ) {}

  async singIn(email, pass) {
    const userEmail = await this.tutorService.findEmail(email);

    console.log('user email', userEmail);
    const cryptoPass = createHash('sha512');
    cryptoPass.update(pass);

    const hashPass = cryptoPass.digest('hex');

    console.log('hash', hashPass);
    if (userEmail.password !== hashPass) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: userEmail._id,
      userName: userEmail.name,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
