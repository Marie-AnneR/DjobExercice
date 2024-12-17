import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { Rental } from './rental/rental.entity';
import { Customer } from './entities/customer.entity';
import { RentalController } from './rental/rental.controller';
import { RentalService } from './rental/rental.service';
import { NotificationService } from './notification/notification.service';

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
  controllers: [RentalController],
  providers: [RentalService, NotificationService],
})
export class AppModule {}