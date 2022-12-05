import { Component   } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
    courses:string [] = [
      "typescript",
      "angular",
      "php"
    ];
    numbers:any[] = [];
    constructor() {}
    ngOnInit(){
      for (let index = 1; index <= 100; index++){
        this.numbers.push(index);
      }
    }
}
