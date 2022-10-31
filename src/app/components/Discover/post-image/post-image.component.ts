import { Component, OnInit, ViewChild } from '@angular/core';
import { FullSizeImageComponent } from '../../full-size-image/full-size-image.component';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('hiddenElement') fullSizedImgElement!: FullSizeImageComponent;

  openImage(){
    this.fullSizedImgElement.show();
  }

}
