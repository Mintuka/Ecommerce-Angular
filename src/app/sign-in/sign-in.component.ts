import { Component } from '@angular/core';
import { UserCredentials } from 'src/types/UserCredentials';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor (private auth: AuthService) {

  }

  Submit(userCredentials: UserCredentials){
    this.auth.logInUser(userCredentials)
  }
}
