import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ITeams } from './interfaces/interfaces';
import { TeamListService } from './team-list.service';
import { Router } from '@angular/router';

const QUALIFICATION_DETAILS = [
  {
    id: 'UEFA',
    name: 'UEFA Champions League group stage'
  },
  {
    id: 'UECL',
    name: 'Europa League group stage'
  },
  {
    id: 'RELEGATION',
    name: 'Relegation'
  }
];

const RESULT_INDICATOR = [
  {
    name: 'Win',
    imgSrc: '/assets/images/win.svg'
  },
  {
    name: 'Draw',
    imgSrc: '/assets/images/draw.svg'
  },
  {
    name: 'Loss',
    imgSrc: '/assets/images/lost.svg'
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  qualificationDetails = QUALIFICATION_DETAILS;
  resultIndicator = RESULT_INDICATOR;
  teamData: ITeams[] = [];
  displayedColumns: string[] =
    [
      'teamId',
      'teamName',
      'matchesPlayed',
      'win',
      'draw',
      'lost',
      'goalScored',
      'goalConceeded',
      'goalDifference',
      'totalPoints',
      'lastFiveStatus'
    ];
  dataSource = new MatTableDataSource(this.teamData);
  errorMessage = '';
  sub!: Subscription;

  constructor(private teamListService: TeamListService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.teamListService.getTeamList().subscribe({
      next: teams => {
        this.teamData = teams;
        this.teamData.sort((a, b) => (b.win*3+b.draw) - (a.win*3+a.draw));
        this.dataSource = new MatTableDataSource(this.teamData);

      },
      error: err => this.errorMessage = err
    })
  }

  calculateGD(GS: number, GC: number) {
    return (GS - GC);
  }

  calculatePoints(W: number, D:number) {
    return (W*3 + D);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewDetails(data: ITeams) {
    this.router.navigate(['/team-list', data.teamId]);
  }

}
