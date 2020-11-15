import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { RacerResult, RacerResultBtn, ResultAction } from '../../modules/kart/shared/models/racerResult';

@Component({
  selector: 'app-pop-result',
  templateUrl: './pop-result.component.html',
  styleUrls: ['./pop-result.component.scss']
})
export class PopResultComponent implements OnInit, OnDestroy {

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

  @Input() result: RacerResult;

  @Output() onAction = new EventEmitter<ResultAction>();

  public win: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.win = this.result.totalPts >= this.result.objectivePts;
    this.filteredButtons = this.buttons.filter( btn => btn.win === this.win );
  }

  ngOnDestroy(): void {

  }

  onActionClick(resultAction: ResultAction) {
    this.onAction.emit(resultAction);
  }

}
