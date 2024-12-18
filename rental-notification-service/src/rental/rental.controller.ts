import { Controller, Get } from '@nestjs/common';
import { RentalService } from './rental.service';
//liaison avec rentalservice.findDureRentals pour récup la data
//point de contrôle pour l'API GET /rentals/due
@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get('due')
  async getDueRentals() {
    return await this.rentalService.findDueRentals();
  }
}
