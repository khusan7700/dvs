import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { InternalServerErrorException, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginInput, MemberInput } from '../../libs/dto/member/member.input';
import { Member } from '../../libs/dto/member/member';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { Roles } from '../auth/decorators/roles.decorator';
import { MemberType } from '../../libs/enums/member.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { MemberUpdate } from '../../libs/dto/member/member.update';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { WithoutGuard } from '../auth/guards/without.guard';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	//---------------------signup-------------------------------------

	@Mutation(() => Member)
	public async singup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('Mutation signup');
		return this.memberService.signup(input);
	}
	//---------------------login-------------------------------------

	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation login');
		console.log('Mutation', input);
		return this.memberService.login(input);
	}

	//---------------------checkAuth-------------------------------------
	@UseGuards(AuthGuard)
	@Query(() => String)
	public async checkAuth(@AuthMember('memberNick') memberNick: string): Promise<string> {
		console.log('Query checkAuth');
		console.log('memberNick:', memberNick);
		return `Hi ${memberNick}`;
	}

	//---------------------checkAuthRoles-------------------------------------
	@Roles(MemberType.USER, MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Query(() => String)
	public async checkAuthRoles(@AuthMember() authMember: Member): Promise<string> {
		console.log('Query checkAuthRoles');
		return `Hi ${authMember.memberNick}, you are ${authMember.memberType} (memberId:${authMember._id})`;
	}

	//---------------------updatemember-------------------------------------

	@UseGuards(AuthGuard)
	@Mutation(() => Member)
	public async updateMember(
		@Args('input') input: MemberUpdate,
		@AuthMember('_id') memberId: ObjectId,
	): Promise<Member> {
		console.log('Mutation: memberId');
		delete input._id;
		return await this.memberService.updateMember(memberId, input);
	}

	//---------------------getmemeber-------------------------------------
	@UseGuards(WithoutGuard)
	@Query(() => Member)
	public async getMember(@Args('memberId') input: string, @AuthMember('_id') memberId: ObjectId): Promise<Member> {
		console.log('Query gerMember');
		const targetId = shapeIntoMongoObjectId(input);
		return this.memberService.getMember(memberId, targetId);
	}

	//----------------------------------------------------------
	//---------------------ADMIN--------------------------------
	//----------------------------------------------------------

	//---------------------getAllMembersByAdmin-------------------------------------
	// @Roles(MemberType.ADMIN)
	// @UseGuards(RolesGuard)
	// @Mutation(() => String)
	// public async getAllMembersByAdmin(): Promise<string> {
	// 	console.log('mutation: getAllMembersByAdmin ');
	// 	return this.memberService.getMember();
	// }

	// //---------------------updateMemberByAdmin-------------------------------------
	// @Mutation(() => String)
	// public async updateMemberByAdmin(): Promise<string> {
	// 	console.log('mutation: updateMemberByAdmin');
	// 	return this.memberService.getMember();
	// }
}
