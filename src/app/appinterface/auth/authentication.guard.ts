import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { ServiceService } from '../../Pages/services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private ServiceService: ServiceService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    return this.ServiceService.user.pipe(take(1),
      map(res => {
        if (res) {
          return true
        }
        return this.router.createUrlTree(['/login'])
      })
    )
  }

}
