import { Component, OnInit, Input, Inject } from '@angular/core';

import { UsersService } from './users.service';
import { BehaviorSubject } from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface User {
  name: string,
  role: string,
  photo: string,
  country: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  @Input() requestMethodBehavior : BehaviorSubject<string>;

  users: Array<Object>;
  isLoading: Boolean;
  imgPath: string;
  url: string;

  constructor(private usersService: UsersService, public dialog: MatDialog) {
    this.isLoading = false;
    this.imgPath = './assets/img/img-users/';
    this.url = './assets/json/users.json';
  }

  openDialog(data : User): void {
    this.dialog.open(UserDialog, {
      width: '250px',
      data
    });
  }

  toogleStateLoading() : void{
    this.isLoading = !this.isLoading;
  }

  getUsers(method : string) : void{
    this.toogleStateLoading();
    if(method === 'fetch-api'){
      this.getWithFetchAPI();
    }else{
      this.getWithHttpClient();
    }
  }

  getWithFetchAPI() : void{
    fetch(this.url)
    .then( response => {
      return response.json();
    }).then( (data : Array<Object>) => {
      this.users = data;
      if(this.isLoading) this.toogleStateLoading();
    })
  }

  getWithHttpClient() : void{
    this.usersService.getUsers(this.url)
      .subscribe( (data : Array<Object>) => {
        this.users = data;
        if(this.isLoading) this.toogleStateLoading();
      });
  }

  ngOnInit() {
    this.requestMethodBehavior.subscribe( (value : string) => {
      this.getUsers(value);
    })
  }
}
@Component({
  selector: 'app-users-dialog',
  templateUrl: './dialogs/users-dialog.component.html',
  styleUrls: ['./users.component.scss']
})

export class UserDialog {

  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public user: User) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}