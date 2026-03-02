import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import FollowSchema from '../../schemas/Follow.model';
import { MemberModule } from '../member/member.module';
import { FollowResolver } from './follow.resolver';
import { FollowService } from './follow.service';
import { AuthModule } from '../auth/auth.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Follow', schema: FollowSchema }]), AuthModule, MemberModule],
	providers: [FollowResolver, FollowService],
})
export class FollowModule {}
