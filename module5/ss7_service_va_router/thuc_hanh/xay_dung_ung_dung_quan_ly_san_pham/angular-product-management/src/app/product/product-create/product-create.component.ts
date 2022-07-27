import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.productForm.valid) {
      this.productForm.value.id = parseInt(this.productForm.value.id);
      this.productService.saveProduct(this.productForm.value).subscribe(() => {
          console.log('success');
          this.router.navigateByUrl('product/list');
        }, error => {
          console.log(error);
          this.router.navigateByUrl('product/create');
        }
      );
    }
  }
}
