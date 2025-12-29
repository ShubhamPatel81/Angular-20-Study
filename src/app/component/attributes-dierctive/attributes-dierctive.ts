import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes-dierctive',
  imports: [NgClass,NgStyle,CommonModule],
  templateUrl: './attributes-dierctive.html',
  styleUrl: './attributes-dierctive.css',
})
export class AttributesDierctive {

  studentList=[
    {id:1,name:'John',age:20,status:false},
    {id:2,name:'Alice',age:22,status:true},
    {id:3,name:'Bob',age:19,status:false}

  ]

textColor:string='red';


myCss:any={
  "color":"green",
  "font-weight":"bold",
  "font-size":"20px",
  "background-color":"yellow"
}

}