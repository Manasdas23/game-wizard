import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../../../interfaces/model';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from "../game-card/game-card.component";

@Component({
  selector: 'app-game-list',
  imports: [CommonModule, GameCardComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {

  @Input() games: Game[] = [];
  @Input() categories: string[] = [];
  @Input() selectedCategory = 'all';

  @Output() categoryChanged = new EventEmitter<string>();

  filterByCategory(category: string) {
    this.categoryChanged.emit(category);
  }
}
