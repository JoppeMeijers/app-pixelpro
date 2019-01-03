import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProjectService } from './project.service';
import { ClientService } from './client.service';
import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { NewClientComponent } from './new-client/new-client.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ExistingCustomersComponent } from './existing-customers/existing-customers.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { BalancesComponent } from './balances/balances.component';
import { HttpModule } from '@angular/http';
import { ClientComponent } from './client/client.component';
import { ChangeCompanyComponent } from './change-company/change-company.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddProjectDescComponent } from './add-project-desc/add-project-desc.component';
import { ShowLogsComponent } from './show-logs/show-logs.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewClientComponent,
    ExistingCustomersComponent,
    PasswordsComponent,
    BalancesComponent,
    ClientComponent,
    ChangeCompanyComponent,
    ProjectsComponent,
    AddProjectsComponent,
    ProjectDetailsComponent,
    AddProjectDescComponent,
    ShowLogsComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
      { path: 'register-user', component: SignUpComponent , canActivate: [SecureInnerPagesGuard]},
      { path: 'forgot-password', component: ForgotPasswordComponent , canActivate: [SecureInnerPagesGuard]},
      { path: 'verify-email-address', component: VerifyEmailComponent , canActivate: [SecureInnerPagesGuard]},
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'newClient', component: NewClientComponent, canActivate: [AuthGuard]},
      { path: 'existingCustomers', component: ExistingCustomersComponent, canActivate: [AuthGuard]},
      { path: 'passwords', component: PasswordsComponent, canActivate: [AuthGuard]},
      { path: 'balances', component: BalancesComponent, canActivate: [AuthGuard]},
      { path: 'client/:companyname/:clientname/:email/:phone/:destination/:location/:id/:kvk/:btw', component:ClientComponent, canActivate: [AuthGuard]},
      { path: 'change-company/:companyname/:clientname/:email/:phone/:destination/:location/:id/:kvk/:btw', component:ChangeCompanyComponent, canActivate: [AuthGuard]},
      { path: 'add-projects/:id', component:AddProjectsComponent, canActivate: [AuthGuard]},
      { path: 'project-details/:id/:employee/:title/:desc', component: ProjectDetailsComponent, canActivate: [AuthGuard]},
      { path: 'add-project-desc/:id/:employee/:title/:desc', component:AddProjectDescComponent, canActivate: [AuthGuard]}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,  
    AngularFirestoreModule

  ],
  providers: [AngularFireDatabase, ClientService, ProjectService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
