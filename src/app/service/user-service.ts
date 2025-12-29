import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getAdditionOfTwoNumbers(a: number, b: number): number {
    return a + b;
  }
  http = inject(HttpClient);
  getAllPhotos() {
    // Logic to get all photos
    this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
