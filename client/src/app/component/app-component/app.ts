import { Component } from '@angular/core';
import {AuthService} from '../../service/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'client';

  constructor(private authService: AuthService) {

  }

  onLogin() {
    this.authService.login();

  }

  onLogout() {
    this.authService.logout();
  }

}
