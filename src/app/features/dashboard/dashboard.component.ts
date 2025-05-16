import { Component } from '@angular/core';
import { FlashScreenComponent } from "./flash-screen/flash-screen.component";
import { Game } from '../../interfaces/model';
import { GameServiceService } from '../../core/services/game-service.service';
import { GameCardComponent } from "./game-card/game-card.component";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FlashScreenComponent, GameCardComponent, CommonModule, SidebarComponent,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public showFlash = true;
  public games: Game[] = [];
  public allGames: Game[] = [];
  public categories: string[] = [];
  public selectedCategory = 'all';
  public searchTerm = '';

  constructor(private gameService: GameServiceService) {}

  ngOnInit() {
    setTimeout(() => (this.showFlash = false), 5000);
    this.categories = this.gameService.getCategories();
    this.allGames = this.gameService.getGames();
    this.filterGames();
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filterGames();
  }

  onSearchChange(): void {
    this.filterGames();
  }

  private filterGames(): void {
    const filteredByCategory =
      this.selectedCategory === 'all'
        ? this.allGames
        : this.gameService.getGamesByCategory(this.selectedCategory);

    this.games = filteredByCategory.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


}
