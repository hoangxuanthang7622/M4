import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent {
    constructor(){ }
    ngOnInit():void {

    }
    callPhone(phone:any):void{
      console.log(phone);
    }
}
