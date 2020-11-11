import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  public static setCookie(name: string, value: string, d: Date, path: string = '') {
    let expires: string = `expires=${d.toUTCString()}`;
    let cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }
}
