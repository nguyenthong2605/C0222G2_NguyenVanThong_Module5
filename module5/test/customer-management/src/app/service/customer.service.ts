import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private URL_CUSTOMER = 'http://localhost:3000/customer';
  private URL_CUSTOMER_TYPE = 'http://localhost:3000/customerType';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.URL_CUSTOMER_TYPE);
  }

  saveCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.URL_CUSTOMER, customer);
  }
  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.URL_CUSTOMER + '/' + id);
  }
  findByIdCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_CUSTOMER + '/' + id);
  }
  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(this.URL_CUSTOMER + '/' + id, customer);
  }

}


