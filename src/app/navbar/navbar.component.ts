import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor() { }

  faAngular = faAngular;
  faReact = faReact;

  @Input() requestMethodBehavior : BehaviorSubject<string>;

  changeRequestMethod(type: string) : void {
    this.requestMethodBehavior.next(type);
  }

  goToReactApp() : void{
    window.location.href = 'https://allanalves23.github.io/simple-list-react/';
  }
  
  ngOnInit() {
  }

}
