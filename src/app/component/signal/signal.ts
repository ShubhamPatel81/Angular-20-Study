import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  courseName:String="Angular";

  angualrVersion = signal("20");
  cityList = signal<string[]>(["Bangalore","Chennai","Pune"]);

  courseDuration = signal<string>("2 months");

  studentObj = signal<any>({
    name: "John",
    age: 24,
    course: "Angular",
    city: "Chennai"
  })

  changeDuration(){
    this.courseName = "React JS";
    this.courseDuration.set("6 months");

  }
  addCity( cityName: string){
    // set method to update the signal value by replacing the old value
    // this.cityList.set([...this.cityList(), "Mumbai"]);
    this.cityList.update(city => [...city, cityName]);
  }


changeCity(){
  this.studentObj.update((oldCity:any) =>({
    ...oldCity, 
    city: "Bangalore"
  })

  )
}


}
