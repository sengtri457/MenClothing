import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  private sessionKey = 'user';

  login(email: string, password: string) {
    const storedUser = sessionStorage.getItem(email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.emailValue === email && user.passValue === password) {
        sessionStorage.setItem(this.sessionKey, JSON.stringify(user)); // ✅ store logged-in user
        return true;
      }
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem(this.sessionKey); // ✅ remove logged-in user
  }

  isLoggedIn() {
    return sessionStorage.getItem(this.sessionKey) !== null;
  }
  public register(email: string, password: string): void {
    const user = { emailValue: email, passValue: password };
    sessionStorage.setItem(email, JSON.stringify(user));
  }
}
