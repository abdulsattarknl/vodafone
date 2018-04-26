import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent implements OnInit {
  hiddenOnClick: boolean;
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'Email' : [null, Validators.required],
      'Name': [null, Validators.required],
    })
  }


  ngOnInit() {
    this.hiddenOnClick = false;

  }
  hideThis() {
    this.hiddenOnClick = true;
  }


    //Show data in JSON format after form submit and set submitted to true
    submitForm(form: any): void{
        console.log('Form Data: ');
        console.log(form);
        this.hideThis()
      }
}
