import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Admin } from './component/admin/admin';
import { User } from './component/user/user';
import { DataBinding } from './component/data-binding/data-binding';
import { Signal } from './component/signal/signal';
import { ControlFlow } from './component/control-flow/control-flow';
import { AttributesDierctive } from './component/attributes-dierctive/attributes-dierctive';

//This is class decorator
@Component({
  selector: 'app-root',
  // standalone: true,

  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('project1');
  name: String = 'Shyam';
}
