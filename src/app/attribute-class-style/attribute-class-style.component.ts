import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-class-style',
  templateUrl: './attribute-class-style.component.html',
  styleUrls: ['./attribute-class-style.component.css']
})
export class AttributeClassStyleComponent {
  onSale:boolean = false;
  classExpression:Array<string> = ['class-1','class-2'];
  actionName:string = 'add';
  expression:string = 'red';
  constructor(){}
  ngOnInit(){

  }
}
