import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() putBorderBottom!: boolean
  @Input() chatInfo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
