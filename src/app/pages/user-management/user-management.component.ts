import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.html',
  styleUrls: ['./user-management.css']
})
export class UserManagementComponent implements OnInit {
  showModal: boolean;
  hiddenOnClick: boolean;
  activeUser:any;
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'Email' : [null, Validators.required],
      'Name': [null, Validators.required],
    })
  }


  ngOnInit() {
    this.activeUser=[];
    this.showModal = false;
    this.hiddenOnClick = false;
  }
  showThisModal() {
    this.showModal = !this.showModal;
  }
  hideThis() {
    this.hiddenOnClick = true;
  }


    //Show data in JSON format after form submit and set submitted to true
    submitForm(form: any): void{
      console.log(form);
        this.activeUser.push(form.Name);
        this.hideThis();
        console.log(this.activeUser);
      }
}
