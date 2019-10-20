import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private cognitoUser: any;
  public accessCode;

  constructor() { }

  public hostedUI(): string {
    return 'https://fire593d548d-593d548d-dev.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=1omr9afeoio87nhml4u76249ji&redirect_uri=http://localhost:4200/signedIn/';
  }

  public signOut(): Promise<any> {
    this.cognitoUser = null;
    this.accessCode = null;
    return Auth.signOut();
  }

  public isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          console.log(result);
          this.cognitoUser = result;
          return true;
        }),
        catchError(error => {
          console.log(error);
          return of(false);
        })
      );
  }
}
