import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit {
  toggleThis: boolean;
  type:any;
  constructor() { }

  ngOnInit() {
    var userType = sessionStorage.getItem('type');
    if(userType =="user"){

      this.type="User";
      console.log(this.type);
    }
    else{
      this.type="Admin";
      console.log(this.type);
    }
    this.toggleThis = false;
  }
  toggle() {
    this.toggleThis = !this.toggleThis;

  }

}
