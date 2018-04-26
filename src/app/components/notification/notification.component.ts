import { Component, OnInit } from '@angular/core';
// import { JsonService } from '../../services/jsonServices.service';
// import { Notification } from '../../shared/notification';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/min';
@Component({
  selector: 'app-notification',
  templateUrl: 'notification.html',
  styleUrls: ['./notification.css']
})
export class NotificationComponent implements OnInit {
    notification: any;
    type:any;
constructor() {}
  // constructor(private _jsonService: JsonService) {
  //   this._jsonService.getNotification().subscribe(
  //     (notification: Notification[]) => {
  //       this.notification = notification;
  //       console.log(this.notification);
  //     });
  //
  //  }

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
    this.notification = {
      "notifications": [
        {
          "from":"marin",
          "role":"Admin",
          "date":"25-04-2018",
          "title":"User invite expired",
          "description":"Richard's invite have been expired"
        },
        {
          "from":"matt",
          "role":"User",
          "date":"22-04-2018",
          "title":"Last month bills",
          "description":"Bills for April 2018 has been generated"
        },
        {
          "from":"stephen",
          "role":"Admin",
          "date":"22-04-2018",
          "title":"New admin user",
          "description":"New administrator have been added"
        },
        {
          "from":"stephen",
          "role":"User",
          "date":"22-04-2018",
          "title":"Payment reminder",
          "description":"Your bill payment is due, check with your administrator"
        },
        {
          "from":"stephen",
          "date":"20-04-2018",
          "role":"Admin",
          "title":"New online user",
          "description":"New online user is created"
        }
      ]
    };
  }

}
