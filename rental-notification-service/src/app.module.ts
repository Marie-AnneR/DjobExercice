import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { Rental } from './entities/rental.entity';
import { Customer } from './entities/customer.entity';
import { RentalController } from './rental/rental.controller';
import { RentalService } from './rental/rental.service';
import { NotificationService } from './notification/notification.service';
import { NotificationController } from './notification/notification.controller';
//le hub de mon projet
//configure TypeORM pour la BDD
//enregistre entities controls et services
//active le module ScheduleModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'sakila',
      entities: [Rental, Customer],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Rental, Customer]),
    ScheduleModule.forRoot(),
  ],
  controllers: [RentalController, NotificationController],
  providers: [RentalService, NotificationService],
})
export class AppModule {}