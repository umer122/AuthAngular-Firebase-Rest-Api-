import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, exhaustMap, take } from "rxjs";
import { ServiceService } from "../../Pages/services/service.service";

@Injectable()
export class AuthIntercepter implements HttpInterceptor {

    constructor(private _authService: ServiceService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return this._authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user){
                    return next.handle(req);

                }
                const modifyRequest = req.clone({
                    params: new HttpParams().set('login', user.token) 
                })
                return next.handle(modifyRequest);
            }))

    }
}
