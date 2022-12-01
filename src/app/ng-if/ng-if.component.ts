import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
    isShow: boolean = true;
    the_number: number = 11;
    constructor(){ }
    ngOnInit():void{

    }
}
