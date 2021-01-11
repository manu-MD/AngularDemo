import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './http-interceptor.service';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthService} from './user/services/auth.service';
import {environment} from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        // TODO: use memory instead of disk IO to retreive token
        tokenGetter: () => AuthService.getToken(),
        allowedDomains: [environment.apiBaseUrl]
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, // isMock ? HttpMockRequestInterceptor :
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
