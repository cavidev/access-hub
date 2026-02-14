import { InMemoryUserRepository } from './repositories/in-memory-user.repository';
import { InMemoryRoleRepository } from './repositories/in-memory-role.repository';
import { RegisterUser } from '../application/use-cases/register-user.usecase';
import { AssignRole } from '../application/use-cases/assign-role.usecase';
import { InFileSystemAuditRepository } from './repositories/in-file-system-audit.repository';
import { RecordAuditEvent } from '../application/use-cases/record-audit-event.usecase';
import fs from 'node:fs/promises';
const userRepo = new InMemoryUserRepository();
const roleRepo = new InMemoryRoleRepository();
const auditRepo = new InFileSystemAuditRepository(fs);
const recordAudit = new RecordAuditEvent(auditRepo);

export const registerUser = new RegisterUser(userRepo, recordAudit);
export const assignRole = new AssignRole(userRepo, roleRepo, recordAudit);
