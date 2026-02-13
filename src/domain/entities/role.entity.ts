export class Role {
  constructor(
    public readonly id: string,
    public readonly name: string,
    private permissions: string[] = [],
  ) {}

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  addPermission(permission: string): void {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
    }
  }
}
