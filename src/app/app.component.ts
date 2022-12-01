import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name:string = 'thang';
  age:number = 18;

  //đặt tên cho dễ nhớ
  appComponentAnswer(event:any):void {
    console.log('AppComponent::appComponentAnswer:' + event);
  }
}
