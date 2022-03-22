import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRequest, ApiResult } from '../models/user';

export class AuthService {
  baseURL = 'http://66.70.229.82  :8181/Authorize';
  constructor(private http: HttpClient) {}
  login(body: ApiRequest):Observable<ApiResult> {
    return this.http.post<ApiResult>(this.baseURL, body);
  }
  logout() {}
}
