import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../common/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private BaseUrl = 'http://localhost:9090/api/student';

  constructor(private httpClient: HttpClient) { }

  getAllStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.BaseUrl);
  }

  // Hoặc dùng getStudent() nếu bạn gọi nó từ component
  getStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.BaseUrl);
  }
}
