import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private URL_STUDENT = 'http://localhost:3000/student';
  private URL_CLASS = 'http://localhost:3000/class';

  constructor(private httpClient: HttpClient) {
  }
  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL_STUDENT);
  }
}
