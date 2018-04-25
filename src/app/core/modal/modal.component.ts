import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl:'./modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent implements OnInit {
  hiddenOnClick:boolean;
  constructor() { }

  ngOnInit() {
    this.hiddenOnClick=false;
  }
  hideThis(){
    this.hiddenOnClick=true;
  }

}
