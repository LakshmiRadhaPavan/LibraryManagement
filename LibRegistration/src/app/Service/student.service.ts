import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://localhost:8086/api/v1/register';

  constructor(private http: HttpClient) { }

  registerStudent(student: Student): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }
}

