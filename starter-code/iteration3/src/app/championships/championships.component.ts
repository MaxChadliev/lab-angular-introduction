import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.css']
})
export class ChampionshipsComponent  {
  arrayOfChampions: Array<any> = [
    {year: "2015-2016",
    name:"Cleveland Cavaliers",
    image:"https://cbscleveland.files.wordpress.com/2014/12/cavslogo_770x433.jpg?w=770" ,
    players: ["LBJ", "JR Smith", "Kevn Love", "Kyrie"]},

    {year: "2007-2008",
    name:"Boston Celtics",
    image:"http://cdn8.bigcommerce.com/s-upa3n54fye/products/978/images/951/79411CP000__15792.1489697435.500.750.jpg?c=2",
    players: ["Paul Pierce", "Rajon Rondo", "KG", "Ray Allen"]},

    {year: "2013-2014",
    name:"San Antonio Spurs",
    image: "https://sportslogohistory.com/wp-content/uploads/2017/12/san_antonio_spurs_2017-pres.png",
    players: ["Leonard", "Duncan", "Manu", "Parker"]}

  ]
  constructor() { }


}
