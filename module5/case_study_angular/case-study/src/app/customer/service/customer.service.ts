import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from "../../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  customerType: CustomerType[] = [];
  private URL_CUSTOMER = 'http://localhost:3000/customer';
  private URL_CUSTOMERTYPE = 'http://localhost:3000/customerType';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.URL_CUSTOMERTYPE);
  }

  saveCustomer(customer: Customer) {
    return this.httpClient.post(this.URL_CUSTOMER, customer);
  }u

  findByIdCustomer(id: number) {
    return this.httpClient.get(this.URL_CUSTOMER + '/' + id);
  }

  editCustomer(id: number, customer: Customer) {
    return this.httpClient.patch(this.URL_CUSTOMER + '/' + id, customer);
  }
}
