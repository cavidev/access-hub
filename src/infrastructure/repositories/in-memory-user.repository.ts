import { UserRepository } from '../../domain/ports/user-repository.port';
import { User } from '../../domain/entities/user.entity';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    return Promise.resolve().then(() => {
      this.users.push(user);
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return Promise.resolve().then(() => {
      return this.users.find((u) => u.email === email) || null;
    });
  }
}
