import { Controller, Post, Body } from '@nestjs/common';
import { registerUser } from '../container';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body('email') email: string) {
    return registerUser.execute(email);
  }
}
