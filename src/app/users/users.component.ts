import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<Object>;
  isLoading: Boolean;
  imgPath: String;

  constructor() {
    this.isLoading = false;
    this.imgPath = '/assets/img/img-users/';
  }

  toogleStateLoading(){
    this.isLoading = !this.isLoading;
  }

  async getUsers(){
    this.toogleStateLoading();
    await fetch('assets/json/users.json')
    .then( response => {
      return response.json();
    }).then( data => {
      this.users = data;
    })
    this.toogleStateLoading()
  }

  ngOnInit() {
    this.getUsers();
  }

}
