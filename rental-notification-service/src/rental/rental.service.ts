import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { Rental } from '../entities/rental.entity';
//service pour gérer les locations
//méthode pour récupérer les locations à j-3 et j-5
@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
  ) {}

  async findDueRentals() {
    const today = new Date();
    const threeDaysLater = new Date(today);
    threeDaysLater.setDate(today.getDate() + 3);

    const fiveDaysLater = new Date(today);
    fiveDaysLater.setDate(today.getDate() + 5);

    return this.rentalRepository.find({
      where: {
        return_date: MoreThanOrEqual(threeDaysLater) && LessThanOrEqual(fiveDaysLater),
      },
      relations: ['customer'],
    });
  }
}
