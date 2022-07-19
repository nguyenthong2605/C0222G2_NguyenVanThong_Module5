import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularChangeFontSizeComponent } from './angular-change-font-size/angular-change-font-size.component';
import { AngularShowPetInfoComponent } from './angular-show-pet-info/angular-show-pet-info.component';
import {FormsModule} from "@angular/forms";
import { AngularUsingBootstrapComponent } from './angular-using-bootstrap/angular-using-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularChangeFontSizeComponent,
    AngularShowPetInfoComponent,
    AngularUsingBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
