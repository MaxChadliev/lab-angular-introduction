import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent  {
    
    title: string = "Japan";
    image: string = 'http://www.travelcheckpoint.com/wp-content/uploads/2014/06/Yakushi-ji-.jpg';
    description: string = 'Yakushi-Ji Temple'
  
  constructor() { }

  ngOnInit() {
  }

}
