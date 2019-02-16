import {Component} from '@angular/core';
import {AuthService} from '../../service/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'client';
  showNav = false;
  logged = false;

  constructor(private authService: AuthService) {

  }

  showNavigation() {
    this.showNav = true;
  }

  onLogin() {
    this.authService.login();
    this.logged = true;

  }

  onLogout() {
    this.authService.logout();
    this.logged = false;
  }

}
