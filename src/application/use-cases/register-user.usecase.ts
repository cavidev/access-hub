import { UserRepository } from '../../domain/ports/user-repository.port';
import { User } from '../../domain/entities/user.entity';
import { randomUUID } from 'crypto';
import { RecordAuditEvent } from './record-audit-event.usecase';

export class RegisterUser {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly audit: RecordAuditEvent,
  ) {}

  async execute(email: string) {
    const exists = await this.userRepo.findByEmail(email);
    if (exists) {
      throw new Error('User already exists');
    }

    const user = new User(randomUUID(), email);
    await this.userRepo.save(user);

    await this.audit.execute('USER_CREATED', user.email, { userId: user.id });

    return user;
  }
}
