import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserEntity, UserSchema } from './entities/user.entity';
import { UserCommandRepository, UserQueryRepository } from './repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }])],
  providers: [UserCommandRepository, UserQueryRepository],
  exports: [UserCommandRepository, UserQueryRepository],
})
export class UserInfrastructureModule {}
