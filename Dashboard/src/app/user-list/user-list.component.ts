import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users?: User[];
  // id:number=0;
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  selectUser(id: number) {
    this.router.navigate(['/editsave', id]);
  }

  deleteUser(id: number) {
    if (confirm("Delete this product?")) {
      this.userService.deleteUser(id).subscribe(() => this.userService.findAll());
    }
  }
}