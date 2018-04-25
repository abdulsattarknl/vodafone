import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.css']
})
export class UserManagementComponent implements OnInit {
  showModal:boolean;
  constructor() { }

  ngOnInit() {
    this.showModal=false;
  }
  showThisModal(){
    this.showModal =!this.showModal;
  }
}
