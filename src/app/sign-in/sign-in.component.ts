import { Component } from '@angular/core';
import { SignInService } from 'src/services/sign-in.service';
import { UserCredentials } from 'src/types/UserCredentials';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor (private signInService: SignInService) {

  }

  Submit(values: UserCredentials){
    this.signInService.logInUser(values)
  }
}
