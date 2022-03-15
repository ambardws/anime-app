import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor  {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0MDAiLCJuYmYiOjE2NDcyMjg5OTcsImV4cCI6MTY0OTgyMDk5NywiaWF0IjoxNjQ3MjI4OTk3fQ.1Sf47e1jjH5bnQCOtI5OBZLRptBLPSdBjCWlUUgGJ4Q';
    const modifiedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${userToken}`),
    })
    return next.handle(modifiedReq);
    }
}