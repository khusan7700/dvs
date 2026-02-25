import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdAt', 'updaetdAt', 'memberLikes', 'memberViews', 'memberRank'];

export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};
