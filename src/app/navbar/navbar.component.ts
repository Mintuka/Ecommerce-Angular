import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isVisible = false;
  user: any;
  constructor (private auth: AuthService, private router: Router) {
    if ( localStorage.getItem('user') !== null )
      this.user = JSON.parse(localStorage.getItem('user') || '')
  }

  isLoggedIn = () => {
    return this.user !== null && this.user !== undefined
  } 
  
  logOut () {
    this.auth.logOut()
    this.isVisible = false
    this.user = null
    this.router.navigate(['/'])
    }
  

  show () {
      this.isVisible = !this.isVisible
    }
}
