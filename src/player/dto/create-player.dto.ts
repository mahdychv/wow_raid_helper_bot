import { IsNotEmpty } from 'class-validator';

import { PlayerRole } from '../models/player-role.enum';
import { PLAYER_CLASS } from '../models/class.constants';

export class CreatePlayerDto {
  @IsNotEmpty()
  nickname: string;

  @IsNotEmpty()
  roles: PlayerRole[];

  @IsNotEmpty()
  class: (typeof PLAYER_CLASS)[number];
}
