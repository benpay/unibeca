import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StudientService } from '../../services/studient.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { StudientsInterface } from '../../models/studients';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observer } from 'firebase';
import { Observable } from 'rxjs/Observable';

interface Studients {
  email: string;
  // password: string;
  // name: string;
  // surname: string;
  // birthdate: string;
  // studients: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  studient: StudientsInterface = {
    email: '',
  password: '',
  name: '',
  surname: '',
  birthdate: '',
  studies: ''
  }
  studientsCol: AngularFirestoreCollection<Studients>;
  studients: Observable<Studients[]>;
  // email: string;
  // password: string;
  // name: string;
  // surname: string;
  // birthdate: string;
  // studies: string;

  // public name: string;
  // public email: string;
  // public password: string;
  // public surname: string;
  // public birthdate: string;
  // public studies: string;
  // public db: AngularFirestore

  constructor(
    public authService: AuthService,
    public studientService: StudientService,
    public router: Router,
    public flashMessage: FlashMessagesService,
    private bdd: AngularFirestore
  ) { }

  ngOnInit() {
    this.studientsCol = this.bdd.collection('studients');
    this.studients = this.studientsCol.valueChanges();
  }

  onSubmitAddUser({value}: {value: StudientsInterface}){
    this.authService.registerUser(value.email, value.password)
    .then( (res) => {
      this.flashMessage.show('Usuario creado correctamente.', 
      {cssClass: 'alert-success', timeout: 8000});
      this.router.navigate(['/personalAreaAlumn'])
    }).catch( (err) => {
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timeout: 8000});      
    })
    this.studientService.addNewSetudient(value);
  }
  //   this.bdd.collection('studients').add({'email': this.email, 
  //                                         'password': this.password,
  //                                         'name': this.name,
  //                                         'surname': this.surname,
  //                                         'birthdate': this.birthdate,
  //                                         'studies': this.studies,
  //                                       })
    
    // // this.db.collection("studients").add({
    // //   email: this.email,
    // //   password: this.password,
    // //   name: this.name,
    // //   surname: this.surname,
    // //   birthdate: this.birthdate,
    // //   studients: this.studies
    // // })
    // // .then(function(docRef){
    // //   console.log("Document written with ID: ", docRef.id);
    // //   console.log(this.email + " " +  this.password + " " + this.name + " " + this.surname + " " + this.birthdate + " " + this.studies);
    // // })
    // // .catch(function(error){
    // //   console.log("Error adding document; ", error);
    // // })


  //   this.authService.registerUser(this.email, this.password)
  //   .then( (res) => {
  //     this.flashMessage.show('Usuario creado correctamente.', 
  //     {cssClass: 'alert-success', timeout: 8000});
  //     this.router.navigate(['/personalAreaAlumn'])
  //   }).catch( (err) => {
  //     this.flashMessage.show(err.message, 
  //     {cssClass: 'alert-danger', timeout: 8000});      
  //   })
  // }

}
