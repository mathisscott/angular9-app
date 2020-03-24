import { Component } from '@angular/core';

import '@clr/core/icon';
import { ClarityIcons } from '@clr/core/icon-shapes';
import { homeIcon } from '@clr/core/icon-shapes/shapes/home';
import { helpInfoIcon } from '@clr/core/icon-shapes/shapes/help-info';
import { envelopeIcon } from '@clr/core/icon-shapes/shapes/envelope';
import { userIcon } from '@clr/core/icon-shapes/shapes/user';

ClarityIcons.addIcons(homeIcon, helpInfoIcon, envelopeIcon, userIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
  version = 'Angular version 9.0.7';
}