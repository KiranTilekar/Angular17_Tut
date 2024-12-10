import { Component, computed, effect, signal } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  count = signal<number>(0);
  todos = signal<Todo[]>([]);
  newTodoText = signal<string>("");

  //computed : returns signal
  total = computed(() => this.todos().length);

  //effect : returns nothing
  constructor () {
    effect(() => {
      const even = this.total() % 2 == 0;
      console.log(`Items are: ${even?"Even" : "Odd"}`)
    })
  }

  ngOnInit() {
    console.log(this.count())
  }

  handleInput(event: Event) {
    const input = event?.target as HTMLInputElement;
    this.newTodoText.set(input?.value);
  }

  addTodo() {
    if(this.newTodoText().trim().length) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoText(),
        status: false
      }
      this.todos.set([...this.todos(), newTodo]);
      this.newTodoText.set("");
    }
  }

  deleteTodo(id: number) {
    const updatedTodos: Todo[] = this.todos().filter(todo => todo.id != id);
    this.todos.set(updatedTodos);
  }
}
