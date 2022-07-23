import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    FooterComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
