import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { JwtTestComponent } from './jwt-test/jwt-test.component';
import { HelloWordComponent } from './hello-word/hello-word.component';

@NgModule({
  declarations: [
    AppComponent,
    JwtTestComponent,
    routingComponents,
    HelloWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
