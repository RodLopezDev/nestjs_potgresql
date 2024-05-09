import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RiskProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
