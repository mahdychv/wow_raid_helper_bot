import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Player } from './player.entity';

@Injectable()
export class PlayerRepository extends Repository<Player> {
  constructor(dataSource: DataSource) {
    super(Player, dataSource.createEntityManager());
  }
}
