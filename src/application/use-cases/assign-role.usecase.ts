import { UserRepository } from '../../domain/ports/user-repository.port';
import { RoleRepository } from '../../domain/ports/role-repository.port';

export class AssignRole {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly roleRepo: RoleRepository,
  ) {}

  async execute(userEmail: string, roleName: string) {
    console.log(this.userRepo);
    const user = await this.userRepo.findByEmail(userEmail);
    if (!user) throw new Error('User not found');

    const role = await this.roleRepo.findByName(roleName);
    if (!role) throw new Error('Role not found');

    user.assignRole(role);
    await this.userRepo.save(user);

    return user;
  }
}
