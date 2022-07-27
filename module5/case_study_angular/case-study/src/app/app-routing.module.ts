import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerDeleteComponent} from './customer/customer-delete/customer-delete.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';


const routes: Routes = [
  {
    path: 'customer/list',
    component: CustomerListComponent
  },
  {
    path: 'customer/create',
    component: CustomerCreateComponent
  },
  {
    path: 'customer/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'customer/delete/:id',
    component: CustomerDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
