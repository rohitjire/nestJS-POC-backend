import { CreateDateColumn } from 'typeorm';

export class GenericEntity {
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
  updatedAt: Date;
}
