import { AuditEventRepository } from '../../domain/ports/audit-event-repository.port';
import { AuditEvent } from '../../domain/entities/audit-event.entity';
import { randomUUID } from 'crypto';

export class RecordAuditEvent {
  constructor(private readonly repo: AuditEventRepository) {}

  async execute(type: string, actor: string, metadata: Record<string, any>) {
    const event = new AuditEvent(
      randomUUID(),
      type,
      actor,
      new Date(),
      metadata,
    );

    await this.repo.save(event);
  }
}
