import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Properties, Property } from '../../libs/dto/property/property';
import { Direction, Message } from '../../libs/enums/common.enum';
import { PropertyInput } from '../../libs/dto/property/property.input';
import { MemberService } from '../member/member.service';
import { StatisticModifier, T } from '../../libs/types/common';
import { PropertyStatus } from '../../libs/enums/property.enum';
import { ViewService } from '../view/view.service';
import { ViewGroup } from '../../libs/enums/view.enum';
import * as moment from 'moment';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class PropertyService {
	constructor(
		@InjectModel('Property') private readonly propertyModel: Model<Property>,
		private memberService: MemberService,
		private authService: AuthService,
		private viewService: ViewService,
	) {}

	//---------------------------CREATE PROPERTY--------------------------

	public async createProperty(input: PropertyInput): Promise<Property> {
		try {
			const result = await this.propertyModel.create(input);
			await this.memberService.memberStatsEditor({
				_id: result.memberId,
				targetKey: 'memberProperties',
				modifier: 1,
			});
			return result;
		} catch (err) {
			console.log('Error, Service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}
}
