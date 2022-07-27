import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  product: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        this.productService.findById(this.id).subscribe(data => {
          this.product = data;
        });
      },
      error => {
      });
  }


  ngOnInit(): void {
  }

  delete() {
    this.productService.deleteProduct(this.id, this.product).subscribe(() => {
      console.log('success');
      this.route.navigateByUrl('product/list');
    });
  }
}
