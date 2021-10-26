import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //  api = "http://10.30.204.197:4001/eclient-authorization/user/verifylogin";
  api = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.get(this.api + 'users');
  }
}
