import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequest, ApiResult } from '../models/user';
@Injectable({
  providedIn:'root'
})
export class AuthService {
  baseURL = 'http://66.70.229.82:8181/Authorize';
  constructor(private http: HttpClient) {}
  login(body: ApiRequest):Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseURL, body);
  }
  logout() {}
}
