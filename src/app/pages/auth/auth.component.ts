import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getDatabase, set, ref } from '@firebase/database';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    signIn = true;
    error:any  = null;
  constructor(
      private auth:AuthService,
      private router : Router,
      private db:AngularFireDatabase,
      private storage : AngularFireStorage
      ) { }

  changeOption(prevStatus:boolean){
      this.signIn = prevStatus;
  }
  
  onSubmitHandler(f: NgForm){
    const {email, password, name, cnfPassword} = f.form.value;
    if(password != cnfPassword && !this.signIn){
        this.error = "Password Mismatched"
        return 
    }
    if(this.signIn){
        this.auth.signIn(email, password).then((resp) => {
            console.log(resp);
            
        }).then(()=>{
            this.router.navigateByUrl('/feeds')
        })
    }else{
        const database  = getDatabase();
        this.auth.signUp(email, password, name).then(resp => {
            console.log(resp);
            const uid = resp.user?.uid;
            set(ref(database, 'users/'+uid), {
                uid,
                displayName : name,
                email : email,
            })
        }).then(()=>{
            this.router.navigateByUrl('/feeds')
        }).catch((error)=>{
            console.log(error);
        })
    }  
  }

  ngOnInit(): void {
  }
  

}
