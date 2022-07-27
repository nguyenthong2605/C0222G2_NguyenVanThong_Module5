import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../../model/customer";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";
import {CustomerType} from "../../model/customerType";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customer: Customer;
  customerType: CustomerType[] = [];
  displayDate: string;
  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.customerService.findByIdCustomer(this.id).subscribe(data => {
        this.customer = data;
        this.displayDate = this.customer.birthDay;
        const year = this.displayDate.substring(0, 4);
        const month = this.displayDate.substring(5, 7);
        const day = this.displayDate.substring(8, 10);
        this.displayDate =  day + '/' + month + '/' + year;
        console.log(this.displayDate);
        this.customerForm = new FormGroup({
          name: new FormControl(this.customer.name),
          birthday: new FormControl(this.displayDate),
          gender: new FormControl(this.customer.gender),
          idCard: new FormControl(this.customer.idCard),
          phoneNumber: new FormControl(this.customer.phoneNumber),
          email: new FormControl(this.customer.email),
          address: new FormControl(this.customer.address),
          customerType: new FormControl(this.customer.customerType.id),
        });
      });
    }, error => {
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  edit() {
    const customer = this.customerForm.value;
    this.customerForm.reset();
    console.log(customer);
    this.customerService.editCustomer(this.id, customer).subscribe(data => {
      }, error => {
      }, () => {
        this.router.navigateByUrl('customer/list');
      }
    );
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {

      this.customerType = data;
      console.log(data);
      console.log(this.customerType);
    }, error => {
      console.log(error);
    });
  }
}
