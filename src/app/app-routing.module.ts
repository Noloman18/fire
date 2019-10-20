import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFutureValueComponent } from './add-future-value/add-future-value.component';
import { ViewFutureValueComponent } from './view-future-value/view-future-value.component';
import { ViewFinancialInstrumentsComponent } from './view-financial-instruments/view-financial-instruments.component';
import { HomeComponent } from './home/home.component';
import { ProtectAppGuard } from './protect-app.guard';
import { AuthenticationOutcomeComponent } from './authentication-outcome/authentication-outcome.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddFutureValueComponent, canActivate: [ProtectAppGuard] },
  { path: 'view', component: ViewFutureValueComponent, canActivate: [ProtectAppGuard] },
  { path: 'viewall', component: ViewFinancialInstrumentsComponent, canActivate: [ProtectAppGuard] },
  { path: 'signedIn', component: AuthenticationOutcomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
