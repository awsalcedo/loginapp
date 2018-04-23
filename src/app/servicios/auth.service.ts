import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  //Creacion de usuarios
  registerUser(email: string, pass: string){
    //Tomado de la documentación de Firebase https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
    //Que indica que retorna un firebase.Promise, que resuelve (resolve) o rechaza (reject).
    //Cuando lo haga, invocará todas la funciones de callback que se hayan asignado mediante los
    //métodos .then() o .catch()
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData => resolve (userData),
      err => reject(err));
    });
  }

  loginEmail(email:string, pass:string){
    //https://firebase.google.com/docs/reference/js/firebase.auth.Auth?authuser=0#signInWithEmailAndPassword
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  //Comprobar si el usuario está logueado
  getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

}
