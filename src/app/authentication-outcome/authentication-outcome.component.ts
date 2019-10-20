import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppStateService } from '../app-state.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentication-outcome',
  templateUrl: './authentication-outcome.component.html',
  styleUrls: ['./authentication-outcome.component.scss']
})
export class AuthenticationOutcomeComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appState: AppStateService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate([this.appState.urlBeforeAuthRedirect ? this.appState.urlBeforeAuthRedirect : '/home']);
        this.activatedRoute.queryParamMap.subscribe(parameter => {
          if (parameter['code'])
            this.authService.accessCode = parameter['code']
        });
      }
      else {
        this.router.navigate(['/home']);
      }

      this.appState.urlBeforeAuthRedirect = null;
    });
  }
}
