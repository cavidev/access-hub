import { RoleRepository } from '../../domain/ports/role-repository.port';
import { Role } from '../../domain/entities/role.entity';

export class InMemoryRoleRepository implements RoleRepository {
  private roles: Role[] = [
    new Role('1', 'ADMIN', ['CREATE_USER', 'DELETE_USER']),
    new Role('2', 'USER', ['READ_PROFILE']),
  ];

  async findByName(name: string): Promise<Role | null> {
    return Promise.resolve().then(() => {
      return this.roles.find((r) => r.name === name) || null;
    });
  }

  getAll(): Promise<Role[]> {
    return Promise.resolve(this.roles);
  }
}
