import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor(private http: HttpClient) { }

  getToken(user:User) {
    const headers = {'content-type' : 'application/json'};
    const body = JSON.stringify(user);
    return this.http.post("https://localhost:7289/security/createToken/", body, {headers:headers});
  }

  getString(token:string){
    const headers = {'Authorization': `Bearer ${token}`};
    return this.http.get<string>("https://localhost:7289/security/getMessage/", {headers: headers});
  }
}
