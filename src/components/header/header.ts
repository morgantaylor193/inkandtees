import { Component, Input } from '@angular/core';
import { INavigation } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class Header{
  @Input() navObject: INavigation;
}
