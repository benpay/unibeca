import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './dashboard/carousel/carousel.component';
import { FinancedProjectsComponent } from './financed-projects/financed-projects.component';
import { UnibecaRoutingModule } from './unibeca-routing.module';
import { SecretaryComponent } from './secretary/secretary.component';
import { FaqsComponent } from './faqs/faqs.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { environment } from './../environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PersonalAreaAlumnComponent } from './components/personal-area-alumn/personal-area-alumn.component';
import { PersonalAreaInversorComponent } from './components/personal-area-inversor/personal-area-inversor.component';
import { AuthService } from './services/auth.service';
import { StudientService } from './services/studient.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CarouselComponent,
    FinancedProjectsComponent,
    SecretaryComponent,
    FaqsComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundPageComponent,
    PersonalAreaAlumnComponent,
    PersonalAreaInversorComponent,
  ],
  imports: [
    BrowserModule,
    UnibecaRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, StudientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
