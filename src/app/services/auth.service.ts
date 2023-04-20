import { Injectable } from '@angular/core';
import { UserCredentials } from 'src/types/UserCredentials';
import { UserData } from 'src/types/UserData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createUser (userData: UserData) {
    /*
      if user created
        top right corner is changed to user firstname and dropdown
        show loading icon
        save token locally
        redirected to home page
      else
        redirected to create with can't create modal
    */
  }

  logInUser (userCredentials: UserCredentials) {
    //same as sign up
  }

  logOut () {
    //delete the token and redirect to home
  }
}
