import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  canSave:boolean = true;
  isUnchanged:boolean = true;
  isSpecial:boolean = true;
  setStyles(){
    return{
      'font-style': this.canSave  ?   'italic'  :  'normal',
      'font-weight': this.isUnchanged  ?   'bold'  :  'normal',
      'font-size': this.isSpecial  ?   '200px'  :  '8px'
    }
  }
}
