import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from '../home/home.comonent';
import {RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {path:'employee',component:EmployeeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
