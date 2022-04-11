import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    signIn = true;
    error  = null;
  constructor() { }

  changeOption(prevStatus:boolean){
      this.signIn = prevStatus;
  }
  ngOnInit(): void {
  }

}
