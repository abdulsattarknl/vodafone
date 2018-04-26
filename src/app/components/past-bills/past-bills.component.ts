import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-past',
  templateUrl: 'past-bills.html',
  styleUrls: ['./past-bills.css']
})
export class PastBillsComponent implements OnInit {
  periodBill:any;
  billpay:any;
  currentBill:any;
  constructor() { }

  ngOnInit() {

    this.periodBill = {
      'periodbills': [
        {
          'number': '355544727772',
          'amount': '44.98',
          'period': '25-04-2018',
          'url': '../../../assets/bills/Apr2018.pdf'
        },
        {
          'number': '355533727772',
          'amount': '34.98',
          'period': '25-03-2018',
          'url': '../../../assets/bills/Mar2018.pdf'
        },
        {
          'number': '355522727772',
          'amount': '24.98',
          'period': '25-02-2018',
          'url': '../../../assets/bills/Feb2018.pdf'
        },
        {
          'number': '355511727772',
          'amount': '14.98',
          'period': '25-01-2018',
          'url': '../../../assets/bills/Jan2018.pdf'
        },
        {
          'number': '355512727772',
          'amount': '54.98',
          'period': '25-12-2017',
          'url': '../../../assets/bills/Dec2017.pdf'
        },
        {
          'number': '355511727772',
          'amount': '74.98',
          'period': '25-11-2017',
          'url': '../../../assets/bills/Nov2017.pdf'
        }
      ]
    };
    this.billpay =this.periodBill.periodbills.slice(1,6);// this.periodBill.periodbills.splice(0,1);
    console.log(this.billpay);
    this.currentBill = this.periodBill.periodbills[0];

  }

}
