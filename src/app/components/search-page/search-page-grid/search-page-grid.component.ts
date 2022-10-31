import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page-grid',
  templateUrl: './search-page-grid.component.html',
  styleUrls: ['./search-page-grid.component.scss']
})
export class SearchPageGridComponent implements OnInit {

  posts: string[] = ["2", "w", "4", "f", "2", "w", "4", "f", "2", "w", "4", "f"]

  constructor() { }

  ngOnInit(): void {
  }

}
