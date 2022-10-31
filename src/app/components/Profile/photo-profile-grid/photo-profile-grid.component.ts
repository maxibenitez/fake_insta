import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-profile-grid',
  templateUrl: './photo-profile-grid.component.html',
  styleUrls: ['./photo-profile-grid.component.scss']
})
export class PhotoProfileGridComponent implements OnInit {
  
  posts: string[] = ["d", "r", "r", "d", "r", "r", "d", "r", "r"]

  constructor() { }

  ngOnInit(): void {
  }

}
