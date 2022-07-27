import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customerType";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService, private router: Router) {
    this.getAllCustomerType();
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl(),
      birthDay: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl(),
    });
  }

  submit() {
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(this.customerForm.value).subscribe(() => {
        console.log('success');
        this.router.navigateByUrl('customer/list');
      }, error => {
        console.log(error);
        this.router.navigateByUrl('customer/create');
      });
    }
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerType = data;
      console.log(data);
      console.log(this.customerType);
    }, error => {
      console.log(error);
    }, () => {

    });
  }
}
