import { RacerResult, ResultAction } from '../../modules/kart/shared/models/racerResult';
import { FooterAction } from '../../shared/models/footerBtn';
import { MSG_TWITTER, URL_JOB } from '../../app.constants';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../../shared/services/footer.service';
import { RaceService } from '../../modules/kart/shared/services/race.service';
import { Subscription } from 'rxjs';
import { GameService } from '../../modules/kart/shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  public result: RacerResult = null;

  constructor(private footerService: FooterService,
              private gameService: GameService,
              private raceService: RaceService) { }

  ngOnInit(): void {
    this.subs.push(this.gameService.resultState.subscribe( result => {
      this.result = result;
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }

  public onResultAction(resultAction: ResultAction) {
    switch (resultAction) {
      case ResultAction.retry:
        this.result = null;
        this.raceService.retry();
        break;
      case ResultAction.back_to_website:
        this.footerService.setAction(FooterAction.exit);
        break;
      case ResultAction.go_to_jobs:
        window.open(URL_JOB, '_self');
        break;
      case ResultAction.tweet:
        this.tweet();
        break;
    }
  }

  private tweet() {
    window.open(MSG_TWITTER.split('||PTS||').join(''+this.result.totalPts), '_blank');
  }

  public backToChoice() {
    this.footerService.setAction(FooterAction.driver);
  }

  public backToSite() {
    this.footerService.setAction(FooterAction.exit);
  }

}
