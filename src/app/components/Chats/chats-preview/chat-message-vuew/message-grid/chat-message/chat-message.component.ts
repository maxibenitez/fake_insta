import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() message?: {message:string, type: 'send' | 'recibe'};

  get getMessageType(){
    return this.message?.type;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
