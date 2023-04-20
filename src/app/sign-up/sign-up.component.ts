import { Component } from '@angular/core';
import { SignUpService } from 'src/services/sign-up.service';
import { UserData } from '../../types/UserData';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private signUpService: SignUpService){

  }

  Submit(values: UserData){
    this.signUpService.createUser(values)
  }
}
