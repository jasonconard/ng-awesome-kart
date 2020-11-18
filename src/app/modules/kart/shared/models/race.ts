import { Racer } from './racer';
import { Circuit } from './circuit';
import { Rules } from './rules';
import { RaceResult } from './raceResult';

export interface Race {
  player: Racer;
  circuit: Circuit;
  rules: Rules;
  result: RaceResult

  fps: number,
  time: number
}
