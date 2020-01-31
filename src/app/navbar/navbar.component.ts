import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent{

  constructor() { }

  faAngular = faAngular;
  faReact = faReact;

  goToReactApp() : void{
    window.location.href = 'https://allanalves23.github.io/simple-list-react/';
  }

}
