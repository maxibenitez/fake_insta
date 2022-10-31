import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChatMessageVuewComponent } from './chat-message-vuew/chat-message-vuew.component';

@Component({
  selector: 'app-chats-preview',
  templateUrl: './chats-preview.component.html',
  styleUrls: ['./chats-preview.component.scss']
})
export class ChatsPreviewComponent implements OnInit {

  @Input() chatsArray: string[] = ["d", "r", "r", "d", "r", "r", "d", "r", "r"]

  @ViewChild('hiddenElement') chat?: ChatMessageVuewComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openChat(){
    this.chat?.show();
  }

}
