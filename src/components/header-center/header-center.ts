import { Component, Input } from '@angular/core';
import { INavigation } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.html',
  styleUrls: ['./header-center.scss']
})

export class HeaderCenter {
  @Input() navObject: INavigation;
  public displayMobNav = false;

  public openNav() {
    this.displayMobNav = true;
  }

  public closeNav() {
    this.displayMobNav = false;
  }
}
