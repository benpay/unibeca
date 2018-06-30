import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMessage.show('Usuario logeado correctamente.', 
      {cssClass: 'alert-success', timeout: 8000});
      this.router.navigate(["/personalAreaAlumn"]);
    }).catch((err) => {
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timeout: 8000}); 
      this.router.navigate(["/login"])
    });
  }

  onClickGoogleLogin(){
    // this.authService.loginGoogle()
    //   .then((res) => {
    //     this.router.navigate(['/personalAreaAlumn'])
    //   }).catch( err => console.log(err.message));
    console.log('GOOGLE');
  }
}
