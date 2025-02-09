import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getGrade() {
    return this.http.get(this.apiUrl+"/consultar-all-grado");
  }
  
}
