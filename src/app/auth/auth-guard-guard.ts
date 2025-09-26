import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Loginservice } from './loginservice';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Loginservice);
  const router = inject(Router);
  if (auth.isLoggedIn()) return true;
  alert('You must login first!');
  return router.parseUrl('/login');
};
