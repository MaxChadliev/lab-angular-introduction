import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent  {
  arrayOfChampions: Array<Object> = [
    {year: 2015-2016,
    name:"Cleveland Cavaliers",
    image: "https://camo.githubusercontent.com/8b4fb70df9be889e79171cbebf67127e233bb985/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f34613130336135656261373030316437626537393065656335333533613434652e706e67",
    players: "LBJ"},

    {year: 2014-2015,
    name:"Golden State Warriors",
    image: "https://camo.githubusercontent.com/8b4fb70df9be889e79171cbebf67127e233bb985/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f34613130336135656261373030316437626537393065656335333533613434652e706e67",
    players: "Curry"},

    {year: 2013-2014,
    name:"San Antonio Spurs",
    image: "https://camo.githubusercontent.com/8b4fb70df9be889e79171cbebf67127e233bb985/68747470733a2f2f73332d65752d776573742d312e616d617a6f6e6177732e636f6d2f69682d6d6174657269616c732f75706c6f6164732f75706c6f61645f34613130336135656261373030316437626537393065656335333533613434652e706e67",
    players: "Leonard"}

  ]
  constructor() { }

  

}
