import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolition Demo';
  appName = 'This is a one-way data binding example!';

  header1 = 'Number Interpolation';

  n1 = 70;
  n2 = 30;
  sum = 0;
  qou = 0;
  prod = 0;

  clientName:string = "Jeffrey";

  appliedCSSClass = "green";
  notappliedCSSClass = false;
  myColor = 'red';
  
  showData($event:any){
    console.log("Button is Clicked!");
  }

  getData(data:any){
    console.warn(data)
  }

  
}


