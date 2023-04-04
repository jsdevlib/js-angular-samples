import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-odd',
  templateUrl: './game-odd.component.html',
  styleUrls: ['./game-odd.component.css'],
})
export class GameOddComponent {
  @Input() number = 0;
}
