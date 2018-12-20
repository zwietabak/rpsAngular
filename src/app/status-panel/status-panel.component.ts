import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.css']
})
export class StatusPanelComponent implements OnInit {

  @Input() playerName: String;
  @Input() playerStake: Number;
  @Input() playerChoice: String;

  constructor() { }

  ngOnInit() {
  }

}
