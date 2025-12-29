import { UserService } from './../../service/user-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, HttpClientModule, FormsModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  // Reactive Form
  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    fullName: new FormControl('', Validators.required),
    mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  });

  isFormSubmitted = false;
  //  Inject HttpClient
  http = inject(HttpClient);
  UserService = inject(UserService);

  //  Observable Type Only
  userList$!: Observable<any[]>;

  constructor() {
    const result = this.UserService.getAdditionOfTwoNumbers(5, 10);
    console.log('Addition Result:', result);
    this.loadUsers();
  }

  //  Load Users (GET)
  loadUsers() {
    this.userList$ = this.http.get<any[]>(
      'https://api.freeprojectapi.com/api/GoalTracker/getAllUsers'
    );
  }

  //  Save User (POST)
  onSaveUser() {
    const formValue = this.userForm.value;
    this.isFormSubmitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue).subscribe({
      next: () => {
        alert('User saved successfully');
        this.isFormSubmitted = false;
        this.userForm.reset();
        this.loadUsers(); // 🔥 Refresh List After Save
      },

      error: () => {
        alert('Error while saving user');
      },
    });
  }

  //edit user
  onEdit(item: any) {
    this.userForm = new FormGroup({
      userId: new FormControl(item.userId),
      emailId: new FormControl(item.emailId),
      password: new FormControl(item.password),
      fullName: new FormControl(item.fullName),
      mobileNo: new FormControl(item.mobileNo),
    });
  }
  //clear form
  clearForm() {
    this.userForm.reset();
  }
}
