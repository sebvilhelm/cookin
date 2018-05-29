import { Injectable } from '@angular/core';

@Injectable()
export class RouterService {

  redirectUrl: string;

  constructor() { }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

}
