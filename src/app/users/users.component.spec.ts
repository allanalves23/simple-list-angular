import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent, UserDialog } from './users.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UsersComponent,
        UserDialog
      ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should request users by getUsers method', async(() => {
    spyOn(component, 'getUsers');
    
    expect(component.method).toEqual('fetch-api');

    component.getUsers(component.method); 
    expect(component.getUsers).toHaveBeenCalled()
    component.changeRequestMethod('http-client');
    
    expect(component.method).toEqual('http-client');
    
    component.getUsers(component.method);
    expect(component.getUsers).toHaveBeenCalled();
  }));

  it('should dispatch users list with fetch api method', async(() => {
    spyOn(component, 'getWithFetchAPI');
    component.getWithFetchAPI();
    expect(component.getWithFetchAPI).toHaveBeenCalled();
  }));

  it('should dispatch users list with http client method', async(() => {
    spyOn(component, 'getWithHttpClient');
    component.getWithHttpClient();
    expect(component.getWithHttpClient).toHaveBeenCalled();
  }));

  it('should dispatch toogleLoading method', async(() => {
    expect(component.isLoading).toEqual(false);

    component.toogleStateLoading();

    expect(component.isLoading).toEqual(true);

    component.toogleStateLoading();

    expect(component.isLoading).toEqual(false);
  }));

  it('should change request method', async(() => {
    expect(component.method).toEqual('fetch-api');
    
    component.changeRequestMethod('http-client'); // to  http-client
    
    expect(component.method).toEqual('http-client');
    
    component.changeRequestMethod('fetch-api'); // to fetch-api
    
    expect(component.method).toEqual('fetch-api');
  }));

  it('should display dialog', async(() => {
    const mockUser = {
      name: 'mock',
      role: 'n/d',
      photo: 'n/d',
      country: 'USA',
    }

    spyOn(component, 'openDialog');
    component.openDialog(mockUser);
    expect(component.openDialog).toHaveBeenCalled();
    
  }));
});
