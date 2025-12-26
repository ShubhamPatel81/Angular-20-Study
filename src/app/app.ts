import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./component/admin/admin";
import { User } from "./component/user/user";
import { DataBinding } from "./component/data-binding/data-binding";

//This is class decorator
@Component({
  selector: 'app-root',
  // standalone: true,

  imports: [Admin, User, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
  ,styles: [`
    h1 {
      color: blue;
    }
  `]

})
export class App {
  protected readonly title = signal('project1');
  name:String='Shyam';
}
