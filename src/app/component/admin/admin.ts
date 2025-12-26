import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
// Implementing lifecycle interface 
export class Admin implements OnInit, AfterViewInit ,OnDestroy{

  constructor() { 
    console.log("Admin Component Loaded Constructor");
    // Initialization code can go here
    // properties can be initialized here
  }

  ngOnInit(): void {
    console.log("Admin Component Initialized onInit ");
    // api call
    // subscriptions

  }
  ngAfterViewInit(): void {
    console.log("Admin Component View Initialized AfterViewInit ");

  }
  ngOnDestroy(): void {
    console.log("Admin Component Destroyed OnDestroy ");
    // cleanup code
    // unsubscribe
  }
}
