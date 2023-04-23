import { Injectable } from '@angular/core';
import { createUser, logInUser } from 'src/api/user/user';
import { UserCredentials } from 'src/types/UserCredentials';
import { UserData } from 'src/types/UserData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:5000/api/v1/'

  constructor(private router: Router) { }

  async create(userData: UserData): Promise<any> {
    const { status, data } = await createUser(userData);
    if ( status == 201 ) {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/']);
    } else {
      console.log('errrrr')
      //notify user he/she used incorrect password/email
    }
  }


  async logIn(userCredentials: UserCredentials): Promise<any> {
    const { status, data } = await logInUser(userCredentials);
    if ( status == 200 ) {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/']);
    } else {
      //notify user he/she used incorrect password/email
    }
  }

  logOut () {
    localStorage.removeItem('user');
    //log out loading
    this.router.navigate(['/']);
  }
}
