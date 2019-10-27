import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectAppGuard implements CanActivate {

  constructor(
    private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    let response = this.authService.isAuthenticated({bypassCache:false});

    response.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        window.location.href = this.authService.hostedUI();
      }
    });

    return response;
  }
}
