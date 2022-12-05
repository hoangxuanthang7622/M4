import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: any = '#D9D9D9';
  @Input() progressColor: any = '#4CAF50';
  @Input() progress: any = 0;

  constructor() {
  }

  ngOnInit() {
    this.loading();
  }

  loading() {
    let interval = setInterval(() => {
      this.progress = +this.progress + 3;
      if (this.progress == 100) {
        clearInterval(interval);
      }
    }, 100);
  }
}
