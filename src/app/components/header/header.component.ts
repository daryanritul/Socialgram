import { Component, OnInit } from '@angular/core';

import  { faRss, faMessage, faPowerOff, faUserCircle,faSearch, faCompass} from '@fortawesome/free-solid-svg-icons'

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

  constructor() { }

    changeAuth(){
        console.log(this.authState);
        this.authState = !this.authState;
    }
    
  ngOnInit(): void {
  }

}
