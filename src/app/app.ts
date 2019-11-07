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
          url: this._linkHelper.productPage(2),
          label: 'Products'
        },
        {
          url: this._linkHelper.pricingPage(),
          label: 'Pricing'
        }
      ],
      rightNav: [
        {
          url: this._linkHelper.aboutPage(),
          label: 'About'
        },
        {
          url: this._linkHelper.contactPage(),
          label: 'Contact'
        }
      ],
      logoNav: {
        url: this._linkHelper.homePage(),
        logoUrl: '../../assets/svg/logo.svg',
        logoSmallUrl:'../../assets/svg/logo-small.svg',
        altText: 'Ink & Tees Logo'
      }
    }
  }
}
