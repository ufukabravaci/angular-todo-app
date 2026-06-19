import { Component, signal } from '@angular/core';
import { TodoPageComponent } from "./pages/todo-page/todo-page";

@Component({
  selector: 'app-root',
  imports: [TodoPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-todo-app');
}
