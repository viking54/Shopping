import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayPageComponent } from './display-page/display-page.component';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import {  HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent, 
    DisplayPageComponent, LoginAndRegisterComponent, AdminPanelComponent,  DetailsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
