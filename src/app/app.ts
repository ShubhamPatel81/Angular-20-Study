import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./component/admin/admin";
import { User } from "./component/user/user";
@Component({
  selector: 'app-root',
  // standalone: true,

  imports: [Admin, User],
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
