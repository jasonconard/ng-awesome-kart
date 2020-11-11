import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Racer } from '../../shared/models/racer';
import { RacerResult, RacerResultBtn, ResultAction } from '../../shared/models/racerResult';

@Component({
  selector: 'app-pop-result',
  templateUrl: './pop-result.component.html',
  styleUrls: ['./pop-result.component.scss']
})
export class PopResultComponent implements OnInit, OnDestroy {

  public win: boolean = false;
  public result: RacerResult = null;

  private buttons: RacerResultBtn[] = [{
    action: ResultAction.back_to_website,
    label: 'Je préfère prendre le bus',
    win: false
  },{
    action: ResultAction.retry,
    label: 'La prochaine sera la bonne...',
    win: false
  },{
    action: ResultAction.tweet,
    label: 'Tweeter mon résultat !',
    cssClass: 'twitter',
    win: true
  },{
    action: ResultAction.retry,
    label: 'Un deuxième tour ?',
    win: true
  },{
    action: ResultAction.go_to_jobs,
    label: 'Il y a un job pour toi',
    win: true
  }];

  public filteredButtons: RacerResultBtn[] = [];

  @Input() racer: Racer;

  @Output() onAction = new EventEmitter<ResultAction>();

  constructor() { }

  ngOnInit(): void {
    this.result = this.racer.racerResult;
    this.win = this.result.totalPts >= this.result.objectivePts;
    this.filteredButtons = this.buttons.filter( btn => btn.win === this.win );
  }

  ngOnDestroy(): void {

  }

  onActionClick(resultAction: ResultAction) {
    this.onAction.emit(resultAction);
  }

  public gameEndAction(retry: boolean){
    /*if(this.lose) {
      this.lose = false;
      if(retry){
        this.isLoading = true;
          this.clearRace();
          this.init();
      } else {
        //document.location.href = CONFIG.LINK_SITE;
      }
    } else if(this.win) {
      this.win = false;
      if(retry){
        this.isLoading = true;

        this.clearRace();
        this.init();
      } else {
        var jobtype = (angular.isUndefined($cookies.get('jobtype')) ? "job" : $cookies.get('jobtype'));
        var score = (vm.finalPoints > vm.objective + (vm.objective * 10 / 100) ? "awesome" : "passed");
        document.location.href = CONFIG.LINK_OFFERS + jobtype + "/" + score;
      }
    }*/
  }

}
