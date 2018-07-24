import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Picture Swag';
  arrayOfPics: Array<Object> = [
    {
    id: 1,
    image: 'http://www.travelcheckpoint.com/wp-content/uploads/2014/06/Yakushi-ji-.jpg',
    description: 'Yakushi-Ji Temple'
  }, {
    id: 2,
    image: 'http://www.travelcheckpoint.com/wp-content/uploads/2014/06/Himeji-Castle.jpg',
    description: 'Himeji Castle'
  }, {
    id: 3,
    image: 'http://www.travelcheckpoint.com/wp-content/uploads/2014/06/Byodo-in-Temple.jpg',
    description: 'Byodo-in Temple'
  }
];
}