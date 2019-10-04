import { Component, OnInit } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';
import { INavigation } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class AppComponent implements OnInit{
  public navigation: INavigation;

  constructor(private _linkHelper: LinkHelper) {}

  ngOnInit() {
    this.navigation = {
      leftNav: [
        {
          url: this._linkHelper.tShirtPage(),
          label: 'Custom T Shirts'
        }
      ],
      rightNav: [
        {
          url: this._linkHelper.contactPage(),
          label: 'Contact Us'
        }
      ],
      logoNav: {
        url: this._linkHelper.homePage(),
        logoUrl: '../../assets/img/logo.svg',
        altText: 'Ink & Tees Logo'
      }
    }
  }
}
