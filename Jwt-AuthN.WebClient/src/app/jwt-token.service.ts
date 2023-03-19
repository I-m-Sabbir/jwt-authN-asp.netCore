import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor(private http: HttpClient) { }

  getToken() {
    let parameter = new HttpParams();
    //parameter = parameter.append("id", id);
    return this.http.post("url", { params: parameter });
  }
}
