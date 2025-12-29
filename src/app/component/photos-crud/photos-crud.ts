import { UserService } from './../../service/user-service';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-photos-crud',
  imports: [FormsModule],
  templateUrl: './photos-crud.html',
  styleUrl: './photos-crud.css',
})
export class PhotosCrud implements OnInit {
  photosList: any[] = [];

  ngOnInit(): void {
    debugger;
    this.getAllPhotos();
  }
  // using dependency injection to get HttpClient instance
  // constructor(private http: HttpClient) {}

  // 2nd way without dependency injection
  http = inject(HttpClient);
  UserService = inject(UserService);

  getAllPhotos() {
    // Logic to get all photos
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((data: any) => {
      this.photosList = data;
    });
    // this.UserService.getAllPhotos().subscribe((data: any) => {
    //   this.photosList = data;
    // });
  }
  isFormSubmitted: boolean = false;
  // post photo
  newPhoto: any = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };
  onSavePhoto(form: NgForm) {
    debugger;
    this.isFormSubmitted = true;
    if (form.invalid) {
      return;
    }
    this.http
      .post('https://jsonplaceholder.typicode.com/photos', this.newPhoto)
      .subscribe((data: any) => {
        alert('Photo added successfully with ID: ' + data.id);
        this.getAllPhotos(); // Refresh the list after adding a new photo
        form.resetForm();
        this.isFormSubmitted = false;
      });
  }

  // edit photo
  onEdit(photo: any) {
    this.newPhoto = { ...photo };
  }
  onUpdatePhoto() {
    this.http
      .put('https://jsonplaceholder.typicode.com/photos/' + this.newPhoto.id, this.newPhoto)
      .subscribe((data: any) => {
        alert('Photo updated successfully!');
        this.getAllPhotos(); // Refresh the list after updating the photo
      });
  }
  onDelete(photoId: number) {
    const confirmDelete = window.confirm('Are you sure you want to delete this photo?');

    if (confirmDelete) {
      this.http.delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`).subscribe({
        next: () => {
          alert('Photo deleted successfully!');
        },
        error: () => {
          alert('Failed to delete photo');
        },
      });
    }
  }
}
