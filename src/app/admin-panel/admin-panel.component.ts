import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  gameStatus: String = "---";
  nameWinner: String = "---";
  numberPlayers: Number = 0;

  constructor() {

  };

  ngOnInit() {

  };

  getStatus(): void {
    console.log("status");
  };

  //TODO change return type to String
  getWinner(): void {
    console.log("winner");
  };

  //TODO change return type to Number
  getNumberPlayers(): void {
    console.log("numberPlayers");
  };

};
