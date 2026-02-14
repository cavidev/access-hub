export class AuditEvent {
  constructor(
    public readonly id: string,
    public readonly type: string,
    public readonly actor: string,
    public readonly createdAt: Date = new Date(),
    public readonly metadata: Record<string, any> = {},
  ) {}
}
