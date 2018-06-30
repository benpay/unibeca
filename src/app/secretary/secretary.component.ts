import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {
  title = "Secretaria"
  subtitle = "Contacta con nosotros"
  public data:any=[]
 
  ngOnInit() {
  }
  
  constructor(private http: HttpClient){
  }
 
  save(name, email, mobile, subject, message): void {
    this.data['name']= name;
    this.data['email']= email;
    this.data['mobile']= mobile;
    this.data['subject']= subject;
    this.data['message']= message;
    console.log(this.data);
   }
}
