import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentication-outcome',
  templateUrl: './authentication-outcome.component.html',
  styleUrls: ['./authentication-outcome.component.scss']
})
export class AuthenticationOutcomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    setTimeout(()=> {
      this.authService.isAuthenticated().subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/home']);
        }
        else {
          this.router.navigate(['/home']);
        }
      });
    },3000);
  }
}
