export enum ResultAction {
  'retry', 'back_to_website', 'go_to_jobs', 'tweet'
}

export interface RacerResult {
  itemNb: number,
  itemPts: number,
  timePts: number,
  totalPts: number,
  raceTime: number,
  objectiveTime: number,
  objectivePts: number
}

export interface RacerResultBtn {
  action: ResultAction,
  label: string,
  cssClass?: string,
  win: boolean
}
