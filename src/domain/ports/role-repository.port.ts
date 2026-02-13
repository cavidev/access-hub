import { Role } from '../entities/role.entity';

export interface RoleRepository {
  findByName(name: string): Promise<Role | null>;
}
