import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IEmployee } from '../interfaces/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManageService {
  private readonly _HttpClient = inject(HttpClient);

  getEmployees():Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}/employees`)
  }

  getSingleEmployee(id:string):Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/employees/${id}`)
  }

  AddEmployee(data:IEmployee):Observable<any> {
    return this._HttpClient.post(`${environment.apiUrl}/employees`,data)
  }

  EditEmployee(id:string,employee:IEmployee):Observable<any>{
    return this._HttpClient.put(`${environment.apiUrl}/employees/${id}`, employee)
  }


  deleteEmployee(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.apiUrl}/employees/${id}`)
  }
}
