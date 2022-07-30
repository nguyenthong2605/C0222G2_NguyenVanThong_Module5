import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  p: number = 1;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customer = data;
      this.p = 1;
      this.router.navigateByUrl('/customer/list');
    }, error => {
      console.log(error);
    });
  }
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}
