import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor(private http: HttpClient) { }

  getToken(user: User) {
    let headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(user);
    return this.http.post("https://localhost:7289/security/createToken/", body, { headers: headers });
  }

  getString() {
    let token = sessionStorage.getItem('token');
    var headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get("https://localhost:7289/security/getMessage/", { headers: headers, responseType: 'text' });
  }
}