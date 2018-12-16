import { NewClientService } from './new-client.service';
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




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewClientComponent,
    ExistingCustomersComponent,
    PasswordsComponent,
    BalancesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'newClient', component: NewClientComponent},
      { path: 'existingCustomers', component: ExistingCustomersComponent},
      { path: 'passwords', component: PasswordsComponent},
      { path: 'balances', component: BalancesComponent},
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFireDatabase, NewClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
