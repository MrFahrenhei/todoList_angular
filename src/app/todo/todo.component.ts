import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  standalone: true,
  imports: [
    HeaderComponent, MainComponent, FooterComponent
  ]
})
export class TodoComponent {

}
