import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtTokenService } from '../jwt-token.service';
import { User } from '../User';

@Component({
  selector: 'app-jwt-test',
  templateUrl: './jwt-test.component.html',
  styleUrls: ['./jwt-test.component.css']
})
export class JwtTestComponent implements OnInit{
  public user = new User();
  public token: string = "";
  public data: string = "";

  constructor(private _service: JwtTokenService) {  }
  ngOnInit(): void {
    
  }
  Login(){
    this._service.getToken(this.user).subscribe(data => {this.token = data.toString()});
    if(this.token.length > 0 ){
      this._service.getString(this.token).subscribe(data => {console.log(data.toString())});
    }
  }
}
