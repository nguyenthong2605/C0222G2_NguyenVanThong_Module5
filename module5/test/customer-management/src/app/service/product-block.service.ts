import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductBlock} from '../model/product-block';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductBlockService {
  private URL_PRODUCT_BLOCK = 'http://localhost:8080/api/productBlock/';
  private URL_PRODUCT = 'http://localhost:8080/api/product/list';

  constructor(private httpClient: HttpClient) {
  }

  getAllProductBlock(page: number): Observable<ProductBlock[]> {
    return this.httpClient.get<ProductBlock[]>(this.URL_PRODUCT_BLOCK + 'list?page=' + page);
  }
  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_PRODUCT);
  }
  saveProductBlock(productBlock): Observable<ProductBlock> {
    return this.httpClient.post<ProductBlock>(this.URL_PRODUCT_BLOCK + '/save', productBlock);
  }
  deleteProductBlock(id: number): Observable<ProductBlock> {
    return this.httpClient.delete<ProductBlock>(this.URL_PRODUCT_BLOCK + '/{id}' + id);
  }
  findByIdProductBlock(id: number): Observable<ProductBlock> {
    return this.httpClient.get<ProductBlock>(this.URL_PRODUCT_BLOCK + 'delete/${id}' + id);
  }
}
