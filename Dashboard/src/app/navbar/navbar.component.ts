import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    { path: '/', title: 'Home' },
    { path: '/workshops', title: 'Workshops' }
  ];

  ngOnInit(): void {
  }

}
