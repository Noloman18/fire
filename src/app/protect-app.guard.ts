import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from './app-state.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectAppGuard implements CanActivate {

  constructor(
    private appState: AppStateService,
    private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    let response = this.authService.isAuthenticated();

    response.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.appState.urlBeforeAuthRedirect = state.url;
        window.location.href = this.authService.hostedUI();
      }
    });

    return response;
  }
}
