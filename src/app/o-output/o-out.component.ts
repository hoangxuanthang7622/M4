import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-o-output',
  templateUrl: './o-out.component.html',
  styleUrls: ['./o-out.component.css']
})
export class OOutComponent  {
    //nhận vào output answerRequest
    @Output() answerRequest = new EventEmitter<any>();
    constructor() { }
    ngOnInit():void {

    }
  // xu li su kien click
  onClick(value:any){
    console.log('OOuputComponent::onClick:' + value);
    //đẩy ngược ra answerRequest => appcomponentAnswer
    this.answerRequest.emit(value);
  }
}
