import { Component } from '@angular/core';

@Component({
  selector: 'app-b-property',
  templateUrl: './b-property.component.html',
  styleUrls: ['./b-property.component.css']
})
export class BPropertyComponent {
    image:string = 'https://vcdn1-vnexpress.vnecdn.net/2022/08/24/Lamborghini-1-7267-1661328019.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=zm9bdrPLAR1YhrojCIgDAA'
    colspan:number = 1;
    isUnchanged:boolean = true;
    constructor(){

    }
    ngOnInit():void{

    }
}
