import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean; // Добавлено поле для редактирования
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: Date.now(),
        text: this.newTodo.trim(),
        completed: false,
        isEditing: false
      });
      this.newTodo = '';
    }
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  startEditing(todo: Todo) {
    todo.isEditing = true;  // Включаем режим редактирования
  }

  stopEditing(todo: Todo) {
    todo.isEditing = false;  // Выключаем режим редактирования
  }

  updateTodoText(todo: Todo) {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
    }
    todo.isEditing = false;  // Закрываем режим редактирования после обновления
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
