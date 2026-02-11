import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	ITALY = 'ITALY',
	SKOREA = 'SKOREA',
	AMERICA = 'AMERICA',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	BED = 'BED',
	BOOKSHELF = 'BOOKSHELF',
	KID = 'KID',
	CHAIR = 'CHAIR',
	KITCHEN = 'KITCHEN',
	OFFICE = 'OFFICE',
	TABLE = 'TABLE',
	SOPA = 'SOPA',
	BATHROOM = 'BATHROOM',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});
