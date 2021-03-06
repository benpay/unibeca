import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nameUser: String;
  public emailUser: String;
  // public photoUser: String;

  constructor(
    public authService:  AuthService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth){
        this.isLogin = true;
        this.nameUser = auth.displayName;
        this.emailUser = auth.email;
        // this.photoUser = auth.photoURL;
      } else{
        this.isLogin = false;
      }
    });
  }

  onClickLogout () {
    this.authService.logout();
  }
}