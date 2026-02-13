import { Controller, Post, Body, Get } from '@nestjs/common';
import { assignRole } from '../container';

@Controller('roles')
export class RolesController {
  @Get()
  async getRoles() {
    // return this.assignRole.getAll();
  }

  @Post('assign')
  async assign(@Body() body: { email: string; role: string }) {
    return assignRole.execute(body.email, body.role);
  }
}
