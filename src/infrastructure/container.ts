import { InMemoryUserRepository } from './repositories/in-memory-user.repository';
import { InMemoryRoleRepository } from './repositories/in-memory-role.repository';
import { RegisterUser } from '../application/use-cases/register-user.usecase';
import { AssignRole } from '../application/use-cases/assign-role.usecase';

const userRepo = new InMemoryUserRepository();
const roleRepo = new InMemoryRoleRepository();

export const registerUser = new RegisterUser(userRepo);
export const assignRole = new AssignRole(userRepo, roleRepo);
