import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../model/customer-type';
import {Product} from '../model/product';
import {ProductBlockService} from '../service/product-block.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-block-create',
  templateUrl: './product-block-create.component.html',
  styleUrls: ['./product-block-create.component.css']
})
export class ProductBlockCreateComponent implements OnInit {
  productBlockForm: FormGroup;
  product: Product[] = [];

  constructor(private productBlockService: ProductBlockService,
              private router: Router, private toastr: ToastrService) {
    this.productBlockForm = new FormGroup({
      idProductBlock: new FormControl('', [Validators.required, Validators.pattern(/LH\-[0-9]{4}$/)]),
      product: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/[1-9]\d*$/)]),
      dayAdd: new FormControl('', [Validators.required]),
      dateOfManufacture: new FormControl('', [Validators.required]),
      dateExpiration: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productBlockService.getAllProduct().subscribe(data => {
      this.product = data;
    }, error => {
      console.log(error);
    });
  }
  submit() {
    if (this.productBlockForm.valid) {
      this.productBlockService.saveProductBlock(this.productBlockForm.value).subscribe(() => {
        this.toastr.success('Thêm mới thành công!', '', {
          timeOut: 3000,
          progressBar: true
        });
        this.productBlockForm.reset();
        this.router.navigateByUrl('/productBlock/list');
      }, error => {
        console.log(error);
        this.router.navigateByUrl('productBlock/create');
      });
    }
  }

}
