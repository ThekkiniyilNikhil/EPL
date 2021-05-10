import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPlayers, ITeams } from '../home/home/interfaces/interfaces';
import { TeamListService } from '../home/home/team-list.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit, AfterViewInit {

  teamDetails: ITeams | undefined;
  getTeam!: Observable<ITeams>;
  getPlayers!: Observable<IPlayers>;
  players: IPlayers | undefined;

  @ViewChild('teamNameContainer')
  teamNameContainer!: ElementRef;

  @ViewChild('tabsContainer')
  tabsContainer!: ElementRef;

  firstScore: number | undefined;
  secondScore: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamListService: TeamListService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getTeam = this.teamListService.getTeam(id);
    this.getTeam.subscribe((team: ITeams) => {
      this.teamDetails = team;
      this.changeTeamBgColor(this.teamDetails?.teamName);
    })

    this.getPlayers = this.teamListService.getPlayersList();
    this.getPlayers.subscribe((players: IPlayers) => {
      this.players = players.find((plr: IPlayers) => plr.teamId === id);
    })
  }

  ngAfterViewInit(): void {
  }

  changeTeamBgColor(club: string) {
    if (club === 'arsenal') {
      this.teamNameContainer.nativeElement.classList.add('arsenalBg');
      this.tabsContainer.nativeElement.classList.add('arsenalBg');
    } else if (club === 'chelsea') {
      this.teamNameContainer.nativeElement.classList.add('chelseaBg');
      this.tabsContainer.nativeElement.classList.add('chelseaBg');
    } else if (club === 'everton') {
      this.teamNameContainer.nativeElement.classList.add('evertonBg');
      this.tabsContainer.nativeElement.classList.add('evertonBg');
    } else if (club === 'leeds united') {
      this.teamNameContainer.nativeElement.classList.add('leedsBg');
      this.tabsContainer.nativeElement.classList.add('leedsBg');
    } else if (club === 'leicester city') {
      this.teamNameContainer.nativeElement.classList.add('leicesterBg');
      this.tabsContainer.nativeElement.classList.add('leicesterBg');
    } else if (club === 'liverpool') {
      this.teamNameContainer.nativeElement.classList.add('liverpoolBg');
      this.tabsContainer.nativeElement.classList.add('liverpoolBg');
    } else if (club === 'manchester city') {
      this.teamNameContainer.nativeElement.classList.add('mciBg');
      this.tabsContainer.nativeElement.classList.add('mciBg');
    } else if (club === 'manchester united') {
      this.teamNameContainer.nativeElement.classList.add('munBg');
      this.tabsContainer.nativeElement.classList.add('munBg');
    } else if (club === 'tottenham hotspur') {
      this.teamNameContainer.nativeElement.classList.add('tottenhamBg');
      this.tabsContainer.nativeElement.classList.add('tottenhamBg');
    } else if (club === 'westham united') {
      this.teamNameContainer.nativeElement.classList.add('westhamBg');
      this.tabsContainer.nativeElement.classList.add('westhamBg');
    }
  }

  backNavigate(): void {
    this.router.navigate(['team-list']);
  }

}
