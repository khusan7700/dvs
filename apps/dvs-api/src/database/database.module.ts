import { Module } from '@nestjs/common';
import { InjectConnection, MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

function simpleBoxLog(message: string) {
	const lines = message
		.trim()
		.split('\n')
		.map((line) => line.trim());
	const maxLength = Math.max(...lines.map((line) => line.length));
	const horizontal = '─'.repeat(maxLength + 4); // +4 for padding

	console.log(`┌${horizontal}┐`);
	lines.forEach((line) => {
		const padding = ' '.repeat(maxLength - line.length);
		console.log(`  ${line}${padding}  `); // vertikal chiziqsiz
	});
	console.log(`└${horizontal}┘`);
}

@Module({
	imports: [
		MongooseModule.forRootAsync({
			useFactory: () => ({
				uri: process.env.NODE_ENV === 'production' ? process.env.MONGO_PROD : process.env.MONGO_DEV,
			}),
		}),
	],
	exports: [MongooseModule],
})
export class DatabaseModule {
	constructor(@InjectConnection() private readonly connection: Connection) {
		const env = process.env.NODE_ENV === 'production' ? '🚀 PRODUCTION' : '🛠️ DEVELOPMENT';

		if (connection.readyState === 1) {
			const message = `
    🎉🎉🎉 MONGO CONNECTION SUCCESS 🎉🎉🎉
    💾 Database: MongoDB
    🌍 Mode: ${env}
    🔥 Everything is running smoothly
			`;
			simpleBoxLog(message);
		} else {
			simpleBoxLog('❌ DB is not connected!');
		}
	}
}
