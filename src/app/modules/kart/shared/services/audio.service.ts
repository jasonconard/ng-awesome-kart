import { Injectable } from '@angular/core';
import { Sound, SoundKey } from '../models/sound';
import { AudioLoader, AudioListener, Audio } from 'three';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  public sounds: Sound[] = [];

  private audioListener: AudioListener;
  private audioLoader: AudioLoader;

  constructor() {
    this.sounds[SoundKey.bonus] = { url: 'assets/wav/smb2-coin.wav', volume: 4, loop: false };
    this.sounds[SoundKey.superbonus] = { url: 'assets/wav/smb2-coin-special.wav', volume: 6, loop: false };
    this.sounds[SoundKey.stageMusic] = { url: 'assets/mp3/yakuza-like-a-dragon-time-attack-race.mp3', volume: 0.7, loop: true };
    this.sounds[SoundKey.stageFailed] = { url: 'assets/mp3/yakuza-like-a-dragon-exam-failed.mp3', volume: 1.2, loop: false };
    this.sounds[SoundKey.stageSuccess] = { url: 'assets/mp3/yakuza-like-a-dragon-exam-passed.mp3', volume: 1.2, loop: false };
    this.sounds[SoundKey.drift] = { url: 'assets/wav/drift.wav', volume: 0.3, loop: true };
    this.sounds[SoundKey.engine] = { url: 'assets/wav/engine.wav', volume: 0.1, loop: true };
    this.initSounds();
  }

  initSounds() {
    this.audioListener = new AudioListener();
    this.audioLoader = new AudioLoader();

    this.initSound(SoundKey.bonus);
    this.initSound(SoundKey.superbonus);
    this.initSound(SoundKey.stageMusic);
    this.initSound(SoundKey.stageFailed);
    this.initSound(SoundKey.stageSuccess);
    this.initSound(SoundKey.drift);
    this.initSound(SoundKey.engine);
  }

  initSound(soundKey: SoundKey) {
    const sound: Sound = this.sounds[soundKey];
    if(!sound) { return; }


    this.audioLoader.load( sound.url, buffer => {
      const audio = new Audio( this.audioListener );
      audio.setBuffer( buffer );
      audio.setLoop( sound.loop );
      audio.setVolume( sound.volume );

      const audioBackup = new Audio( this.audioListener );
      audioBackup.setBuffer( buffer );
      audioBackup.setLoop( sound.loop );
      audioBackup.setVolume( sound.volume );

      sound.audio = audio;
      sound.audioBackup = audioBackup;
      sound.ready = true;
    });
  }

  playSound(soundKey: SoundKey) {
    const sound: Sound = this.sounds[soundKey];
    if(sound && sound.ready && !sound.started) {

      if(sound.loop) {
        sound.started = true;
        sound.audio.play();
      } else {
        if(sound.audio.isPlaying) {
          sound.audioBackup.play();
        } else {
          sound.audio.play();
        }
      }

    }
  }

  stopSound(soundKey: SoundKey) {
    const sound: Sound = this.sounds[soundKey];
    if(sound && sound.ready) {
      sound.started = false;
      if(sound.audio.isPlaying) {
        sound.audio.stop();
      }
    }
  }

  updatePitch(soundKey: SoundKey, pitch: number) {
    const sound: Sound = this.sounds[soundKey];
    if(sound && sound.ready) {
      sound.audio.setDetune(pitch);
    }
  }

  updateVolume(soundKey: SoundKey, volume: number) {
    const sound: Sound = this.sounds[soundKey];
    if(sound.ready) {
      sound.audio.setVolume(volume);
    }
  }

}
