import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from '../greetings/greetings.component';
import { AuthService } from '../services/auth.service';
import { GreetingsService } from '../services/greetings.service';
const routes: Routes = [
  {path:'**',component:LoginComponent},
  { path: 'login', component: LoginComponent },
{path:'greetings',component:GreetingsComponent}
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  declarations: [AppComponent, LoginComponent,GreetingsComponent],
  bootstrap: [AppComponent],
  providers:[AuthService,GreetingsService]
})
export class AppModule {}
