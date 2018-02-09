import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { TokenInterceptor } from "./interceptors/token-interceptor";

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),

    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
