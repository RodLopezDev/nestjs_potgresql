import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RiskProfileModule } from './risk-profile/risk-profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...{
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'poseidon',
        password: 'postgres',
        database: 'postgres',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true, // Set to true to automatically synchronize database schema with entities
      },
      autoLoadEntities: true, // Automatically load entity files from the 'entities' directory
      synchronize: true, // Automatically synchronize database schema with entities
    }),
    RiskProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
