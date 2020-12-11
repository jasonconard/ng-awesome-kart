import { Audio, AudioListener } from 'three';

export enum SoundKey {
  'drift', 'engine', 'bonus', 'superbonus', stageMusic, stageFailed, stageSuccess
}

export interface Sound {
  url: string;
  volume: number;
  loop: boolean;
  listener?: AudioListener,
  audio?: Audio;
  audioBackup?: Audio;
  ready?: boolean;
  started?: boolean;
}
