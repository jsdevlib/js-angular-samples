import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  ngOnInit(): void {}

  @Output() intervalFired = new EventEmitter<number>();
  intervalId: any;
  counter = 0;

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.intervalFired.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId);
  }
}
