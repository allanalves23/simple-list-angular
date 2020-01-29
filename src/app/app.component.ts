import { Component, NgModule, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'simple-list';
  behaviorToRequestMethod = new BehaviorSubject<string>('fetch-api');
}
