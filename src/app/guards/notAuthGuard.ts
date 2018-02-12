import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from "../core/login.service";

@Injectable()
export class NotAuthGuard implements CanActivate {


    constructor(
        private loginService: LoginService,
        private router: Router
    ) { }

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.loginService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
            return false;
        } else {
            return true;
        }
    }
}