import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 'apparel',
  templateUrl: './apparel.html',
  styleUrls: ['./apparel.scss']
})

export class IntApparel {  
  constructor( private _linkHelper: LinkHelper ) {}

  public buildApparelUrl(id) {
    return this._linkHelper.apparelBrandPage(id);
  }
}
