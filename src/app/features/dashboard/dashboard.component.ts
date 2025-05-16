import { Component } from '@angular/core';
import { FlashScreenComponent } from "./flash-screen/flash-screen.component";
import { Game } from '../../interfaces/model';
import { GameServiceService } from '../../core/services/game-service.service';
import { GameCardComponent } from "./game-card/game-card.component";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [FlashScreenComponent, GameCardComponent, CommonModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //  games = Array(10).fill({});


  constructor(private gameService: GameServiceService) { }

  public showFlash = true;
  public games: Game[] = [];
  public categories: string[] = [];
  public selectedCategory = 'all';

  ngOnInit() {
    setTimeout(() => {
      this.showFlash = false;
    }, 5000);

    this.categories = this.gameService.getCategories();
    this.games = this.gameService.getGames();
  }


  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.games = this.gameService.getGamesByCategory(category);
  }


}
