import { Module } from '@nestjs/common';

import { AuthApplicationModule } from './application/auth-application.module';
import { AuthController } from './presentation/auth.controller';

@Module({
  imports: [AuthApplicationModule],
  controllers: [AuthController],
})
export class AuthModule {}
