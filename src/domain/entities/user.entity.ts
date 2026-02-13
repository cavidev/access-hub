import { Role } from './role.entity';

export class User {
  constructor(
    public readonly id: string,
    public email: string,
    private roles: Role[] = [],
  ) {}

  changeEmail(newEmail: string) {
    if (!newEmail.includes('@')) {
      throw new Error('Invalid email');
    }
    this.email = newEmail;
  }

  assignRole(role: Role) {
    if (!this.roles.find((r) => r.id === role.id)) {
      this.roles.push(role);
    }
  }

  getRoles(): Role[] {
    return this.roles;
  }

  hasPermission(permission: string): boolean {
    return this.roles.some((role) => role.hasPermission(permission));
  }
}
