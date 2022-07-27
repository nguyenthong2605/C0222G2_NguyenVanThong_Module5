import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // @ts-ignore
  products: Product[] = [];
  private URL_PRODUCT = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_PRODUCT);
  }

  saveProduct(product: Product) {
    return this.httpClient.post(this.URL_PRODUCT, product);
  }

  findById(id: number) {
    return this.httpClient.get(this.URL_PRODUCT + '/' + id);
  }

  deleteProduct(id: number, product: Product) {
    console.log('service' + product);
    return this.httpClient.delete(this.URL_PRODUCT + '/' + id);
  }

  editProduct(id: number, product: Product) {
    return this.httpClient.patch(this.URL_PRODUCT + '/' + id, product);
  }
}

