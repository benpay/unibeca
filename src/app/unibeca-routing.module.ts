import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancedProjectsComponent }  from './financed-projects/financed-projects.component';
import { SecretaryComponent } from './secretary/secretary.component' ;
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PersonalAreaAlumnComponent } from './components/personal-area-alumn/personal-area-alumn.component';
import { PersonalAreaInversorComponent } from './components/personal-area-inversor/personal-area-inversor.component';
import { FaqsComponent } from "./faqs/faqs.component";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'financed-projects', component: FinancedProjectsComponent },
  { path: 'secretary', component: SecretaryComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'personalAreaAlumn', component: PersonalAreaAlumnComponent, canActivate: [AuthGuard] },
  { path: 'personalAreaInversor', component: PersonalAreaInversorComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundPageComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class UnibecaRoutingModule {}