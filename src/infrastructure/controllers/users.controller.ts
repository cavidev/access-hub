import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUser } from '../../application/user-cases/register-user.usecase';
import { InMemoryUserRepository } from '../repositories/in-memory-user.repository';

@Controller('users')
export class UsersController {
  private registerUser: RegisterUser;

  constructor() {
    const repo = new InMemoryUserRepository();
    this.registerUser = new RegisterUser(repo);
  }

  @Post()
  async create(@Body('email') email: string) {
    return this.registerUser.execute(email);
  }
}
