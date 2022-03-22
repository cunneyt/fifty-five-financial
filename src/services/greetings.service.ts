import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResult } from '../models/user';

export class GreetingsService {
  baseURL = ' http://66.70.229.82:8181/GetGreeting';
  constructor(private http: HttpClient) {}
  getGreetings():Observable<ApiResult> {
    return this.http.get<ApiResult>(this.baseURL);
  }
}
