import { Component } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class AppComponent {
  public homeUrl = this._linkHelper.homePage();

  constructor(private _linkHelper: LinkHelper) {}
}
