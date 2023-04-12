import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../jwt-token.service';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {
  public receivedData: string = "";
  constructor(private _service: JwtTokenService) { }
  ngOnInit(): void {

  }

  showText() {
    this._service.getString().subscribe(data => { this.receivedData = data.toString() });
  }

}
