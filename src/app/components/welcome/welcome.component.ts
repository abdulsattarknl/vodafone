import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl:'./welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements OnInit {
  toggleThis:boolean;
  constructor() { }

  ngOnInit() {
    this.toggleThis=false;
  }
  toggle(){
    this.toggleThis = !this.toggleThis;
    
  }

}
