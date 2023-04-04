import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-even',
  templateUrl: './game-even.component.html',
  styleUrls: ['./game-even.component.css'],
})
export class GameEvenComponent {
  @Input() number = 0;
}
