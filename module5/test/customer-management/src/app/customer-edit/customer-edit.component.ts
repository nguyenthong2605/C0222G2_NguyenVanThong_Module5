import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerType: CustomerType[] = [];
  customer: Customer = {};
  customerEdit: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getCustomer(id);
    });
  }

  getCustomer(id: number) {
    return this.customerService.findByIdCustomer(id).subscribe(data => {
      this.getAllCustomerType();
      this.customer = data;
    }, err => {
        console.log(err);
      },
      () => {
        this.customerEdit = new FormGroup({
          id: new FormControl(this.customer.id),
          name: new FormControl(this.customer.name, [Validators.required, Validators.pattern(/^([A-Z][a-z]*\s*)*$/)]),
          birthDay: new FormControl(this.customer.birthDay, [Validators.required]),
          gender: new FormControl(this.customer.gender, [Validators.required]),
          idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern(/(^[0-9]{9}|[0-9]{12})$/)]),
          // tslint:disable-next-line:max-line-length
          phoneNumber: new FormControl(this.customer.phoneNumber, [Validators.required, Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)]),
          email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
          customerType: new FormControl(this.customer.customerType, [Validators.required]),
          address: new FormControl(this.customer.address, Validators.required)
        });
      });
  }

  updateCustomer() {
    const customer: Customer = this.customerEdit.value;
    console.log(customer  );
    this.customerService.updateCustomer(customer.id, customer).subscribe(() => {
      alert('Cập nhật thành công!');
      this.router.navigateByUrl('/customer/list');
    }, error => {
      console.log(error);
    });
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerType = data;
    }, error => {
      console.log(error);
    });
  }

  compareCustomerType(c1: CustomerType, c2: CustomerType): boolean {
    return c1.id === c2.id;
  }
}
