import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../jwt-token.service';
import { User } from '../User';

@Component({
  selector: 'app-jwt-test',
  templateUrl: './jwt-test.component.html',
  styleUrls: ['./jwt-test.component.css']
})
export class JwtTestComponent implements OnInit {
  public user = new User();
  public token = "";
  public loginSuccess: boolean = true;

  constructor(private _service: JwtTokenService) { }

  ngOnInit(): void {

  }

  Login() {
    this._service.getToken(this.user);
    this._service.getToken(this.user).subscribe(data => { this.token = data.toString() });
    if(this.token){
      sessionStorage.clear();
      sessionStorage.setItem('token', this.token);
      this.loginSuccess = true;
    }
  }
}
