import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('rental')
export class Rental {
  @PrimaryGeneratedColumn()
  rental_id: number;

  @Column()
  rental_date: Date;

  @Column({ nullable: true })
  return_date: Date;

  @ManyToOne(() => Customer, (customer) => customer.rentals)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}