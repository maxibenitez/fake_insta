import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message-vuew',
  templateUrl: './chat-message-vuew.component.html',
  styleUrls: ['./chat-message-vuew.component.scss']
})
export class ChatMessageVuewComponent implements OnInit {

  isDisplaying?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isDisplaying = true;
  }

}
