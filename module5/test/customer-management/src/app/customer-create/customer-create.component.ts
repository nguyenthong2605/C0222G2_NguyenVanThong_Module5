import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/customer-type';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private router: Router,
              private toastr: ToastrService) {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][a-z]*\s*)*$/)]),
      birthDay: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/(^[0-9]{9}|[0-9]{12})$/)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(data => {
      this.customerType = data;
    }, error => {
      console.log(error);
    });
  }

  submit() {
    if (this.customerForm.valid) {
      this.customerService.saveCustomer(this.customerForm.value).subscribe(() => {
        this.toastr.success('Thêm mới thành công!', '', {
          timeOut: 3000,
          progressBar: true
        });
        this.customerForm.reset();
        this.router.navigateByUrl('/customer/list');
      }, error => {
        console.log(error);
        this.router.navigateByUrl('customer/create');
      });
    }
  }

}
