export enum ResultAction {
  'retry', 'back_to_website', 'go_to_jobs', 'tweet'
}

export interface RaceResultBtn {
  action: ResultAction,
  label: string,
  cssClass?: string,
  win: boolean
}
