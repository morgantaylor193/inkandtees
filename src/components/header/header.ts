import { Component, Input } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class Header {
  public homeUrl = this._linkHelper.homePage();
  public contactUrl = this._linkHelper.contactPage();
  public tShirtUrl = this._linkHelper.tShirtPage();
  
  constructor( private _linkHelper: LinkHelper){}
}
