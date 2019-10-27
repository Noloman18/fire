import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fire';

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  signIn() {
    window.location.href = this.authService.hostedUI();
  }

  signOut() {
    this.authService
      .signOut()
      .then(result => {
        console.log(result);
        this.router.navigate(['/home']);
      });
  }
}
