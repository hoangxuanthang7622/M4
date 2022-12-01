import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  title: string = '';
  clickMe1():void {
    console.log('clickMe1')
  }
  clickMe2():void {
    console.log('event');
  }
  btnClick():void {
    let objEvent =(event);
    console.log(objEvent);
  }
  divClick(): void {
    console.log('event');

  }
  onKeyUp(event: any): void{
    let tag = event.target.value;//sf
    this.title = tag
  }
}
