import { Controller, Get } from '@nestjs/common';
import { RentalService } from './rental.service';

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get('due')
  async getDueRentals() {
    return await this.rentalService.findDueRentals();
  }
}
