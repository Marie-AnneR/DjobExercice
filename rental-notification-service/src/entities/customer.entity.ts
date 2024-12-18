import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rental } from './rental.entity';
//représente mon tableau client
//définition de mes colonnes + interaction avec le tableau rental
@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  timezone: string;

  @OneToMany(() => Rental, (rental) => rental.customer)
  rentals: Rental[];
}
