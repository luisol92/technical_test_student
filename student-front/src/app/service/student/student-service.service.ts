import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getStudenByGradeId(id:number) {
    return this.http.get(this.apiUrl+"/consultar-alumno/"+id);
  }

  createStudent(body: any) {
    return this.http.post(this.apiUrl+"/crear-alumno", body);
  }
  
}
