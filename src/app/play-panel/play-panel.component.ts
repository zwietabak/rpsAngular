import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-panel',
  templateUrl: './play-panel.component.html',
  styleUrls: ['./play-panel.component.css']
})
export class PlayPanelComponent implements OnInit {

  playerName: String = "Default";
  playerStake: Number = 1337;
  playerChoice: String = "---";

  constructor() { }

  ngOnInit() {
  }

  setPlayerChoise(choise: String): void {
    this.playerChoice = choise;
    console.log(choise);
  };

  makeBet(): void {
    console.log('Goo');
  };

};
