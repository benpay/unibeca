import { Injectable } from '@angular/core';
import { StudientsInterface } from '../models/studients';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudientService {

  studientCollection: AngularFirestoreCollection<StudientsInterface>;
  studientDoc: AngularFirestoreDocument<StudientsInterface>;
  studients: Observable<StudientsInterface[]>;
  studient: Observable<StudientsInterface>;

  constructor(private afs: AngularFirestore) { 
    this.studientCollection = this.afs.collection('studients', ref => ref);
  }

  addNewSetudient(studient: StudientsInterface){
    this.studientCollection.add(studient);
  }

  getAllStudients():Observable<StudientsInterface[]>{
    this.studients = this.studientCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as StudientsInterface;
        data.uid = action.payload.doc.id;
        return data;
      });
    });
    return this.studients;
  }
  
  getStudient(uid: string){
    this.studientDoc = this.afs.doc<StudientsInterface>(`studients/${uid}`);
    this.studient = this.studientDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false){
        return null;
      }else{
        const data = action.payload.data() as StudientsInterface;
        data.uid = action.payload.id;
        return data;
      }
    });
    return this.studient;
  }

  updateStudient(studient: StudientsInterface){
    this.studientDoc = this.afs.doc(`studients/${studient.uid}`);
    this.studientDoc.update(studient);
  }

  deleteStudient(studient: StudientsInterface){
    this.studientDoc = this.afs.doc(`studients/${studient.uid}`);
    this.studientDoc.delete();
  }
}
