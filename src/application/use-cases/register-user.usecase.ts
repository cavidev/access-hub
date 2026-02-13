import { UserRepository } from '../../domain/ports/user-repository.port';
import { User } from '../../domain/entities/user.entity';
import { randomUUID } from 'crypto';

export class RegisterUser {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(email: string) {
    const exists = await this.userRepo.findByEmail(email);
    if (exists) {
      throw new Error('User already exists');
    }

    const user = new User(randomUUID(), email);
    await this.userRepo.save(user);

    return user;
  }
}
