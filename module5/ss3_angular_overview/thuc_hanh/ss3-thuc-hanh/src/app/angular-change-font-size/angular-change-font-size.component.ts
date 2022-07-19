import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-change-font-size',
  templateUrl: './angular-change-font-size.component.html',
  styleUrls: ['./angular-change-font-size.component.css']
})
export class AngularChangeFontSizeComponent implements OnInit {
  fontSize = 14;

  constructor() {
  }

  ngOnInit(): void {
  }
  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
}
