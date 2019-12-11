import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  
  games = [{
  name : 'Star Wars rogue squadron',
  type : 'simulation',
  editeur: 'LucasArt',
  ico :"",
  img :  "https://steamcdn-a.akamaihd.net/steam/apps/455910/capsule_616x353.jpg?t=1542764581",
  grade : "8.2",
  desc : "Star Wars: Rogue Squadron est un "+
  "jeu vidéo de type simulateur de vol spatial au gameplay orienté arcade, codéveloppé par Factor 5 et LucasArts...",
  },{
  name : 'Battle Block threater',
  type : 'plateforme multijoueur',
  editeur: 'The Behemoth',
  ico :"",
  img :  "https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1561397233",
  grade : "7.1",
  desc : "BattleBlock Theater est un jeu de plates-formes "+
    "comique développé par The Behemoth et publié par Microsoft Studios pour la Xbox 360, Windows, et Linux...",
    }
];
  constructor() { }

  ngOnInit() {
  }

}
