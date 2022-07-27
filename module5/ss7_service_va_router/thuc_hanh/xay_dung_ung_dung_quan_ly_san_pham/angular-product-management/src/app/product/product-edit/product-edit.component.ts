import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService, private router: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.productService.findById(this.id).subscribe(data => {
        this.product = data;
        this.productForm = new FormGroup({
          id: new FormControl(this.product.id),
          name: new FormControl(this.product.name),
          price: new FormControl(this.product.price),
          description: new FormControl(this.product.description),
        });
      });
    }, error => {

    });
  }

  ngOnInit(): void {
  }

  edit() {
    const product = this.productForm.value;
    this.productForm.reset();
    console.log(product);
    this.productService.editProduct(this.id, product).subscribe(data => {
      }, error => {
      },
      () => {
        this.router.navigateByUrl('product/list');
      });
  }
}
