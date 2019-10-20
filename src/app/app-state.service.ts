import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public urlBeforeAuthRedirect: string;
  
  constructor() { }
}
