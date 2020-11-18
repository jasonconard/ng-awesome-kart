export interface Rules {
  pts: number; // amount of pts needed for win
  time: number; // limit time of game
  timeValue: number; // count pts about time ( 1 sec late = -timeValue pts )
  turns: number; // number of turns needed before pts count
  difficulty: number; // '50cc': 180, '100cc': 150, '150cc': 130, '200cc': 80
}
