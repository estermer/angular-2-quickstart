import { Component } from '@angular/core';
import { IPerson } from '../interfaces/interfaces';
import {
  isSignInPending,
  isUserSignedIn,
  makeAuthRequest,
  redirectUserToSignIn,
  signUserIn,
  signUserOut,
} from 'blockstack';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../templates/app.template.html',
})
export class AppComponent  {
  person: IPerson;

  constructor() {
    this.person = {
      avatarUrl() {
        return 'https://s3.amazonaws.com/onename/avatar-placeholder.png';
      },
      name() {
        return 'Anonymous';
      },
    };
  }
}
