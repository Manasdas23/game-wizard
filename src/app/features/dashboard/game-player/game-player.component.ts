import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-game-player',
  imports: [CommonModule],
  templateUrl: './game-player.component.html',
  styleUrl: './game-player.component.scss'
})
export class GamePlayerComponent {


    @ViewChild('iframeRef') iframeRef!: ElementRef<HTMLIFrameElement>;

  handleFullscreen(): void {
    const iframe = this.iframeRef.nativeElement;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if ((iframe as any).webkitRequestFullscreen) {
      (iframe as any).webkitRequestFullscreen(); // Safari
    } else if ((iframe as any).msRequestFullscreen) {
      (iframe as any).msRequestFullscreen(); // IE
    }
  }
}
