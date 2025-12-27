import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding  {


// datatypes = string, number, boolean, any, void, null, undefined, array, tuple, enum, object
  courseName : String = "Angular 20";
  isActive : boolean =true;
  currentDate: Date = new Date();
  rollNumbers : number = 111;
  arrayData : number[] = [10,20,30,40,50];
  arrayData1 : Array<number> = [60,70,80,90,100];
  tupleData : [number, string, boolean] = [1, "Hello", true];
  enumData : any;
  objectData : object = {id: 1, name: "John", isActive: true};

  constructor() {
    console.log("Data-binding component loaded");
    console.log ("Course Name: " + this.courseName);

    this.courseName = "Angular 20 - Updated";
    console.log ("Course Name: " + this.courseName);

    setTimeout(()=>{
      this.rollNumbers = 999;
    },5000)
  }
  // ? -> optional parameter
  showAlert(param ?:String) {
    alert("Button clicked!");
  }
  onNumberChange(event: any
  ){
    alert("Selected Number: " + event.target.value);

  }
  onWindowScroll():void {
    console.log("Window scrolled!");
  }
  onMouseEnter():void{
    console.log("Mouse entered the table area!");
    
  }

  // event binding example
  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

}
