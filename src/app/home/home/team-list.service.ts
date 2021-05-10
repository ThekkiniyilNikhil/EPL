import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { IPlayers, ITeams } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeamListService {
  private teamListUrl = 'api/data/team.json';
  private playerListUrl = 'api/data/players.json';

  constructor(private http: HttpClient) { }

  getTeamList(): Observable<ITeams[]> {
    return this.http.get<ITeams[]>(this.teamListUrl).pipe(
      tap(),
      catchError(this.handleError)
    )
  }

  getTeam(id: number): Observable<ITeams> {
    return this.http.get<ITeams>(this.teamListUrl)
      .pipe(
        map(team => team.find((team: ITeams) => team.teamId === id))
      )
  }

  getPlayersList(): Observable<IPlayers> {
    return this.http.get<IPlayers>(this.playerListUrl).pipe(
      tap(),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
