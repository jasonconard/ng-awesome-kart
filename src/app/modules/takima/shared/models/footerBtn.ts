export enum FooterAction {
  'exit', 'about', 'driver', 'game', 'help'
}

export class FooterBtn {
  action: FooterAction;
  name: string;
  icon?: string;
  background: string;

  constructor(o: Partial<FooterBtn>) {
    this.action = o.action;
    this.name = o.name;
    this.icon = o.icon;
    this.background = o.background;
  }
}


export const FOOTER_BTN: { [key: string]: FooterBtn } = {
  'EXIT': new FooterBtn({
    action: FooterAction.exit,
    name: 'Revenir sur le site',
    icon: 'assets/img/ui/icon-exit.png',
    background: '#cb2468'
  }),
  'ABOUT': new FooterBtn({
    action: FooterAction.about,
    name: 'A propos',
    icon: 'assets/img/ui/icon-help.png',
    background: '#00aa00'
  }),
  'DRIVER': new FooterBtn({
    action: FooterAction.driver,
    name: 'C\'est parti',
    icon: 'assets/img/ui/icon-driver.png',
    background: '#00aa00'
  }),
  'GAME': new FooterBtn({
    action: FooterAction.game,
    name: 'Choisir ce pilote',
    background: '#00aa00'
  }),
  'HELP': new FooterBtn({
    action: FooterAction.help,
    name: 'Revoir l\'aide',
    icon: 'assets/img/ui/icon-help.png',
    background: '#cb2468'
  })
};
