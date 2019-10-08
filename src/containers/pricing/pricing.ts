import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 'pricing',
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.scss']
})

export class IntPricing {  
  public contactUrl = this._linkHelper.contactPage();

  constructor(private _linkHelper: LinkHelper) {}
}
