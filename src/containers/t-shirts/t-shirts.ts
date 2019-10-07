import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 't-shirts',
  templateUrl: './t-shirts.html',
  styleUrls: ['./t-shirts.scss']
})

export class IntTShirts {  
  public contactUrl = this._linkHelper.contactPage();

  constructor(private _linkHelper: LinkHelper) {}

  public buildApparelUrl(id) {
    return this._linkHelper.apparelPage(id);
  }
}
