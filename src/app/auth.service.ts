import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { CurrentUserOpts } from '@aws-amplify/auth/lib/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private cognitoUser: any;
  public accessCode;

  public hostedUI(): string {
    return 'https://fire593d548d-593d548d-dev.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=1omr9afeoio87nhml4u76249ji&redirect_uri=http://localhost:4200/signedIn/';
  }

  public signOut(): Promise<any> {
    this.cognitoUser = null;
    this.accessCode = null;
    return Auth.signOut();
  }

  public isLoggedIn() {
    return this.cognitoUser != null;
  }

  public isAuthenticated(currentUserOptions?:CurrentUserOpts): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser(currentUserOptions))
      .pipe(
        map(result => {
          this.cognitoUser = result;
          return true;
        }),
        catchError(error => {
          return of(false);
        })
      );
  }
}
