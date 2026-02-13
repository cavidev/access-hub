import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/controllers/users.controller';
import { RolesController } from './infrastructure/controllers/roles.controller';

@Module({
  controllers: [UsersController, RolesController],
})
export class AppModule {}
