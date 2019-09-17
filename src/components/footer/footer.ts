import { Component, Input, OnInit } from '@angular/core';
import { LinkHelper } from 'src/services/link-helper.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit{
  public currentYear = (new Date()).getFullYear();
  public copywrite = '';
  public startYear = 2019;
  public homeUrl = this._linkHelper.homePage();

  constructor( private _linkHelper: LinkHelper ) {}

  ngOnInit() {
    this.generateCopyWrite();
  }

  public generateCopyWrite() {
    this.copywrite = this.currentYear != this.startYear ? `${this.startYear} - ${this.currentYear}` : `${this.startYear}`;
  }
}
