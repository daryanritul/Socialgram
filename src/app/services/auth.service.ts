import { Injectable } from '@angular/core';
import { AngularFireAuth  } from  "@angular/fire/compat/auth"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth) { 

  }
  signUp(email : string, password : string, name:string){
        const auth = getAuth()
      return createUserWithEmailAndPassword(auth, email,password)

  }
  signIn(email:string, password:string){
      const auth = getAuth();
      return signInWithEmailAndPassword(auth,email, password);
    }
    signOut(){
      const auth = getAuth();
      return signOut(auth);
  }
  getUser(){
      return this.auth.authState;
  }
}
