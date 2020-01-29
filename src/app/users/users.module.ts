import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component'

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
