import { Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications') // Définit la route parent comme "/notifications"
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send') // Définit une route POST "/notifications/send"
  async triggerNotifications() {
    await this.notificationService.sendRentalNotifications();
    return { message: 'Notifications envoyées manuellement !' };
  }
}
