import { booleanAttribute, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgClass, NgStyle } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { DatePipe, LowerCasePipe ,UpperCasePipe, CurrencyPipe ,PercentPipe } from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';
import { DataService } from './services/data.service';
import { User } from './interfaces/user';
import { response } from 'express';
import { error } from 'console';
import { signal } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            FormsModule, 
            NgClass,
            NgStyle, 
            NgIf, NgFor, 
            NgSwitch, NgSwitchCase, NgSwitchDefault, 
            DatePipe, LowerCasePipe ,UpperCasePipe, CurrencyPipe ,PercentPipe,
            AppendPipe, AsyncPipe, JsonPipe,
            TodoComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'training';

  myButton: string = "My Button";

  firstBtn: string = "First Button"
  isDisabled: boolean = true;

  AngularImage: string = "../assets/garden-salad.jpg"

  bgColor: string = "green"
  titleColor: string = "white"

  counter: number = 0;
  isIncrementCounter() {
    this.counter++;
  }

  inputText: string = ""

  //ngClass
  message: string = "This is Danger message"
  classes: string = "danger text-size"

  //ngStyle
  selectedColor: string = "red"

  //ngIf
  username: string = "Kiran"
  isLoggedIn: boolean = false;
  check: boolean = true;
  buttonText: string = "login"

  //ngFor
  names: string[] = ['kiran', 'kalyani', 'shubhangi']

  //ngSwitch
  grade: string = 'd'

  //control flow statement - if-else if-else
  a:number = 1
  b:number = 2

  items = [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'}
  ]

  // Pipes
  topic:string = "Pipes Demo"
  today:number = Date.now()
  currency:number = 1.22222

  // Dependency Injection
  data: string[] = [];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  // API calling
  users: User[] = [];

  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (error: Error) => {
        console.log(error);
      }
    })

    console.log("Count:",this.count())
  }

  // without subscribe data printing by using async pipe
  userList = this.dataService.getUsers();


  // Signals
  count = signal<number>(0);

  //self-task
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    this.buttonText = this.isLoggedIn ? "Logout" : "Login"
  }

  //self-task
  border: string = "dashed"
}
