import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import  { faRss, faMessage, faPowerOff, faUserCircle,faSearch, faCompass} from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    feed = faRss
    messge = faMessage
    search = faSearch
    signin = faUserCircle
    signout = faPowerOff
    explore = faCompass

    authState = true;

    email:any =  null;

  constructor(
      private auth : AuthService,
      private router : Router,
    ) {
        auth.getUser().subscribe(user => {
            this.email = user?.email;
        })
     }

    changeAuth(
        
    ){
        console.log(this.authState);
        this.authState = !this.authState;
    }

    handleRoutes(path:string){
        this.router.navigateByUrl(`/${path}`);
    }

    async handleSignOut(){
        console.log("is");
        
        try {
            await this.auth.signOut().then(()=>{
                this.router.navigateByUrl('/authentication')
                console.log("Done");
                
            }).catch(err => {
                console.log(err);
                
            })
        } catch (error) {
            console.log(error);
        }
    }

  ngOnInit(): void {
  }

}
