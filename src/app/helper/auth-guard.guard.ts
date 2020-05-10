import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private tokenStorage: TokenStorageService, private router: Router) { }
  jwtHelper = new JwtHelperService();

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.tokenStorage.getUser();
    console.log(next.data, currentUser);
    if (!this.jwtHelper.isTokenExpired(currentUser.token)) {
      if (next.data.role && next.data.role.indexOf(currentUser.role[0] == -1)) {
        this.router.navigate['/'];
        return false;
      }
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
}
