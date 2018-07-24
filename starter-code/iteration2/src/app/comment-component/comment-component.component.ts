import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponentComponent implements OnInit {
  username: string = "coolboi55";
  comments: string = "Omg so pretty, would visit again 10/10 love it."

  constructor() { }

  ngOnInit() {
  }

}
