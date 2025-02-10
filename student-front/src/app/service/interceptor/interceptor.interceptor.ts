import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let request = req;
    let user = btoa("admin" + ':' + "admin");//Por efectos de pruebas se deja estos valors quemados pero lo ideal es que se obtengas del localstorage cuando el usuario se loguee
    request = req.clone({
      setHeaders: {
        authorization: `Basic ${user}`
      }
    });
    return next.handle(request);
  }
}
