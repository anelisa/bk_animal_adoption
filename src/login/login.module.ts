import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { TutorModule } from 'src/tutor/tutor.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LoginController } from './login.controller';

@Module({
  imports: [
    TutorModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
