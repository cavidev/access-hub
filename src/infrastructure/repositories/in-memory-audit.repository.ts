import { AuditEventRepository } from '../../domain/ports/audit-event-repository.port';
import { AuditEvent } from '../../domain/entities/audit-event.entity';

export class InMemoryAuditRepository implements AuditEventRepository {
  private events: AuditEvent[] = [];

  async save(event: AuditEvent): Promise<void> {
    this.events.push(event);
    console.log('AUDIT:', event);
    return Promise.resolve();
  }
}
