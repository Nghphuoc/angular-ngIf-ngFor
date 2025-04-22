import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponentComponent } from "./user-component/user-component.component";
import { dataUser } from "./user-component/user.data";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { StudentComponentComponent } from "./student-component/student-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponentComponent, HeaderComponentComponent, StudentComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'demo-project';
  data = dataUser;
  checkOn = false;
  showLoginModal = false;

  openLogin() {
    this.showLoginModal = true;
  }

  closeLogin() {
    this.showLoginModal = false;
  }
}
