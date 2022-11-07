import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = ''
  name = 'my first Angular App'
  passwordCreated:boolean = false
  passwordGeneratedCounter:Date[] = []

  updateUsername(){
    this.username = ''
  }
  displayPassword(){
    this.passwordGeneratedCounter.push(new Date)
    this.passwordCreated = true
  }
}
