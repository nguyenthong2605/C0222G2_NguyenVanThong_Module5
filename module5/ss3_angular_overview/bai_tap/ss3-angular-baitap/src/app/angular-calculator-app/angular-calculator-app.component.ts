import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-calculator-app',
  templateUrl: './angular-calculator-app.component.html',
  styleUrls: ['./angular-calculator-app.component.css']
})
export class AngularCalculatorAppComponent implements OnInit {
  public numberOne: number;
  public numberTwo: number;
  public result: number;

  constructor() { }

  ngOnInit(): void {
  }
  public sum(){
    this.result = +this.numberOne + +this.numberTwo;
  }
  public subtraction(){
    this.result = this.numberOne - this.numberTwo;
  }
  public multiplication(){
    this.result = this.numberOne * this.numberTwo;
  }
  public division(){
    this.result = this.numberOne / this.numberTwo;
  }
}
