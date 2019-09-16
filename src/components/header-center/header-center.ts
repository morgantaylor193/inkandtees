import { Component, Input } from '@angular/core';
import { INavigation } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-header-center',
  templateUrl: './header-center.html',
  styleUrls: ['./header-center.scss']
})

export class HeaderCenter {
  @Input() navObject: INavigation;
}
