import {Component, OnInit} from '@angular/core';
import { ModalComponent } from '../../core/modal/modal.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill-pay.html',
  styleUrls: ['./bill-pay.css']
})
export class BillPayComponent implements OnInit {
  labels: any;
  loginType: any;
  chartData: any = [];
  show: boolean;
  colors: any = [
    {
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ];
  chartOptions = {
   responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
 };
  constructor() {}

  ngOnInit() {
    this.loginType = sessionStorage.getItem('type');
    this.labels = [];
    if (this.loginType == 'admin') {
        this.show = true;
    } else {
      this.show = false;
    }
    this.chartData = [];
    let jsonDummyData = {
      'periodbills': [
        {
          'number': '355544727772',
          'amount': '44.98',
          'period': '25-04-2018',
          'url': './Apr2018.pdf'
        },
        {
          'number': '355533727772',
          'amount': '34.98',
          'period': '25-03-2018',
          'url': './Mar2018.pdf'
        },
        {
          'number': '355522727772',
          'amount': '24.98',
          'period': '25-02-2018',
          'url': './Feb2018.pdf'
        },
        {
          'number': '355511727772',
          'amount': '14.98',
          'period': '25-01-2018',
          'url': './Jan2018.pdf'
        },
        {
          'number': '355512727772',
          'amount': '54.98',
          'period': '25-12-2017',
          'url': './Dec2017.pdf'
        },
        {
          'number': '355511727772',
          'amount': '74.98',
          'period': '25-11-2017',
          'url': './Nov2017.pdf'
        }
      ]
    };

for (let i = 0; i < jsonDummyData.periodbills.length; i++) {
  this.labels.push(jsonDummyData.periodbills[i].period);
}
  let x = [];

  for (let i = 0; i < jsonDummyData.periodbills.length; i++) {
      let key = jsonDummyData.periodbills[i].number.toString();
      if (typeof(x[key]) == 'undefined') { x[key] = []; }
      x[key].push(jsonDummyData.periodbills[i].amount);

  }

  let chData = [];
  let obj = {label: [], data: []};
  obj.label = Object.keys(x);

  for (let i = 0; i < obj.label.length; i++) {
    let obj1 = {label: '', data: []};
    obj1.label = obj.label[i];
    obj1.data = Object.values((x[obj1.label]));
    chData.push(obj1);
  }
this.chartData = [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Bill Amount'}];
  }

  onChartClick(event) {
    console.log(event);
  }

}
