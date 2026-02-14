import { AuditEventRepository } from '../../domain/ports/audit-event-repository.port';
import { AuditEvent } from '../../domain/entities/audit-event.entity';

export class InFileSystemAuditRepository implements AuditEventRepository {
  constructor(private readonly fs: typeof import('node:fs/promises')) {}

  async save(event: AuditEvent): Promise<void> {
    console.log('AUDIT:', event);
    await this.fs.appendFile(
      './auditLogs/audit.log',
      JSON.stringify(event) + '\n',
      {
        flag: 'a',
      },
    );
  }
}
