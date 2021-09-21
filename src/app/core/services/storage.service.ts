import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  token = '';

  constructor() {
    this.onLoadToken();
  }

  onLoadToken() {
    this.token = localStorage.getItem('token') || '';
  }

}
