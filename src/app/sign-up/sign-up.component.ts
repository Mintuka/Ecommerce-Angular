import { Component } from '@angular/core';
import { UserData } from '../../types/UserData';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private auth: AuthService){

  }

  Submit(userData: UserData){
    this.auth.createUser(userData)
  }
}
