import { Column, Entity, PrimaryColumn } from 'typeorm';

import { PlayerRole } from './models/player-role.enum';

@Entity()
export class Player {
  @PrimaryColumn()
  telegramId: string;

  @Column()
  nickname: string;

  @Column('simple-array')
  roles: PlayerRole[];

  @Column()
  class: string;
}
