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
  homeColor = 'yellow'
  cartColor = 'white'
  user: any;
  constructor (private auth: AuthService, private router: Router) {
    if ( localStorage.getItem('user') !== null )
      this.user = JSON.parse(localStorage.getItem('user') || '')
    
    const currentUrl = this.router.url;
    const path = currentUrl.split('/')
    if ( path && path[path.length-1] === 'cart' ) {
      this.homeColor = 'white'
      this.cartColor = 'yellow'
    }
  }

  changeHomeColor () {
    console.log('hello home')
    this.homeColor = 'yellow'
    this.cartColor = 'white'
  }

  changeCartColor () {
    console.log('hello cart')
    this.cartColor = 'yellow'
    this.homeColor = 'white'
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
