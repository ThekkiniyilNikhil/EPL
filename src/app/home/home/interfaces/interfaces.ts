
export interface ITeams {
  [x: string]: any;
  teamId: number;
  teamName: string;
  logo: string;
  matchesPlayed: number;
  win: number;
  draw: number;
  lost: number;
  goalScored: number;
  goalConceeded: number;
  lastFiveStatus: string[];
  lastFiveResults: ILastFiveResults[];
}

export interface ILastFiveResults {
  date: string;
  team: string;
  score: number[];
  type: string;
  opponentLogo: string;
}
export interface IPlayers {
  [x: string]: any;
  teamId: number;
  teamName: string;
  players: IPlayersList[];
}

export interface IPlayersList {
  name: string;
  position: string;
}
