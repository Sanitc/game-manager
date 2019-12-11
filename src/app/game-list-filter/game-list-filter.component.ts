import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.scss']
})
export class GameListFilterComponent implements OnInit {
  games = ['rpg','platforme','fps','mmorpg','simulation'];
  
  constructor() { }

  ngOnInit() {
  }

}
