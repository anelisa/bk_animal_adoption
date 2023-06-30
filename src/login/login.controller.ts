import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/loginDto.dto';
import { LoginService } from './login.service';

@Controller('')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    console.log('loginDto', loginDto);
    return await this.loginService.singIn(loginDto.email, loginDto.pass);
  }
}
