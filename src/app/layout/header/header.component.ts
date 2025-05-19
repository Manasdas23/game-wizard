import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    @Input() searchTerm = '';
  @Output() searchChanged = new EventEmitter<string>();

  onSearchChange() {
    this.searchChanged.emit(this.searchTerm);
  }
}
