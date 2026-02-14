import { AuditEvent } from '../entities/audit-event.entity';

export interface AuditEventRepository {
  save(event: AuditEvent): Promise<void>;
}
