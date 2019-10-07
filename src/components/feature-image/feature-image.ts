import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feature-image',
  templateUrl: './feature-image.html',
  styleUrls: ['./feature-image.scss']
})

export class FeatureImage implements OnInit{
  @Input() backgroundImage = '';
  @Input() pageTitle = '';

  ngOnInit(){
    this.backgroundImage = `url(${this.backgroundImage})`;
  }
}
