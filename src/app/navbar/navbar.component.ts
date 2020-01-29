import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input() requestMethodBehavior : BehaviorSubject<string>;

  changeRequestMethod(type: string) : void {
    this.requestMethodBehavior.next(type);
  }
  
  ngOnInit() {
  }

}
