import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.scss']
})

export class IntPricing {  
  public contactUrl = this._linkHelper.contactPage();
  public apparelUrl = this._linkHelper.apparelPage();
  public gildanUrl = this._linkHelper.apparelBrandPage('gildan');
  
  constructor(private _linkHelper: LinkHelper) {}
}
