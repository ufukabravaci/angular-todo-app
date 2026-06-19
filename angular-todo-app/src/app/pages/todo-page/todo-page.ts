import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Interfaces/todo';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css'
})
export class TodoPageComponent implements OnInit {
  todos: Todo[] = [];
  newTask: string = '';
  editId: number | null = null;
  editTask: string = '';

  ngOnInit() {
    const saved = localStorage.getItem('todos');
    if (saved) this.todos = JSON.parse(saved);
  }

  saveToLocal() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo() {
    if (!this.newTask.trim()) return;
    this.todos.push({ id: Date.now(), task: this.newTask, isCompleted: false });
    this.newTask = '';
    this.saveToLocal();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.saveToLocal();
  }

  startEdit(todo: Todo) {
    this.editId = todo.id;
    this.editTask = todo.task;
  }

  saveEdit(todo: Todo) {
    todo.task = this.editTask;
    this.editId = null;
    this.saveToLocal();
  }

  toggleComplete(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    this.saveToLocal();
  }
}