import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { HeaderComponent } from './components/header/header.component';

import { CookieService } from 'ngx-cookie-service';

import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { RepositoriesComponent } from './components/repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileContainerComponent,
    UserRegisterComponent,
    HeaderComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // angular-material
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    MatDatepickerModule,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
