import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(): boolean  {

    if (localStorage.getItem('tocken') === null) {
      this.router.navigate(['/login']);
      return false
    };
    return true
  }

}
