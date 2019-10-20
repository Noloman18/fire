import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fire';
  loggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('Reloaded App Component', new Date());
    this.authService.isAuthenticated().subscribe(loggedIn => this.loggedIn = loggedIn);
  }

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
