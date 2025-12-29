import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  selectedCast: string = '';

  isStudentActive = signal<boolean>(false);
  changeStatus(value: boolean) {
    this.isStudentActive.set(value);
  }


  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  studentList=[
    {name: 'Alice', age: 20, city: 'New York', status: false},
    {name: 'Bob', age: 22, city: 'Los Angeles', status: true},
    {name: 'Charlie', age: 23, city: 'Chicago', status: false},
    {name: 'David', age: 21, city: 'Houston', status: true},
    {name: 'Eve', age: 20, city: 'Phoenix', status: false},
  ]
}
