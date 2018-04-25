import {Component, OnInit} from '@angular/core';
import { ModalComponent } from '../../core/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls:['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  labels:any;
  chartData:any=[];
  colors:any = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ];
  chartOptions = {
   responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
 };
  constructor() {}

  ngOnInit() {
    this.chartData=[];
    var jsonDummyData = {
      "periodbills": [
        {
          "number":"355544727772",
          "amount":"44.98",
          "period":"25-04-2018",
          "url":"./Apr2018.pdf"
        },
        {
          "number":"355533727772",
          "amount":"34.98",
          "period":"25-03-2018",
          "url":"./Mar2018.pdf"
        },
        {
          "number":"355522727772",
          "amount":"24.98",
          "period":"25-02-2018",
          "url":"./Feb2018.pdf"
        },
        {
          "number":"355511727772",
          "amount":"14.98",
          "period":"25-01-2018",
          "url":"./Jan2018.pdf"
        },
        {
          "number":"355512727772",
          "amount":"54.98",
          "period":"25-12-2017",
          "url":"./Dec2017.pdf"
        },
        {
          "number":"355511727772",
          "amount":"74.98",
          "period":"25-11-2017",
          "url":"./Nov2017.pdf"
        }
      ]
    };
    this.labels=[]
for(var i=0; i<jsonDummyData.periodbills.length;i++){
  this.labels.push(jsonDummyData.periodbills[i].period);
}
  var x = [];

  for(var i=0; i<jsonDummyData.periodbills.length;i++){
      var key = jsonDummyData.periodbills[i].number.toString();
      if (typeof(x[key]) == "undefined") x[key] = [];
      x[key].push(jsonDummyData.periodbills[i].amount);

  }

  var chData=[]
  var obj={label:[],data:[]};
  obj.label=Object.keys(x);

  for(var i=0;i<obj.label.length;i++){
    var obj1={label:"", data:[]};
    obj1.label=obj.label[i];
    // for(var j=0; j<Object.values((x[obj1.label])).length;j++){
    //     obj1.data[j]=x[obj1.label][j];
    // }
    obj1.data = Object.values((x[obj1.label]));
    //obj1.data = (x[obj1.label]);
    console.log(obj1.data);
    chData.push(obj1);
  }
console.log(chData);
this.chartData = chData;
  }

  onChartClick(event) {
    console.log(event);
  }

}
