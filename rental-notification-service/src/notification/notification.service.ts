import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RentalService } from '../rental/rental.service';
//gestion de l'envoi de notifications
//planification des tâches avec Cron
@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(private readonly rentalService: RentalService) {}

  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async sendRentalNotifications() {
    const rentals = await this.rentalService.findDueRentals();

    rentals.forEach((rental) => {
      this.logger.log(
        `Notification envoyée à ${rental.customer.email} (Retour prévu le ${rental.return_date})`
      );
    });
  }
}
