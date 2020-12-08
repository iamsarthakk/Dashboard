import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, 
    private router: Router, private userService: UserService) {
    this.user = new User();
  }

  
  
  
  onSubmit() {
    this.userService.edit(this.user).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        if (params['id'] != "-1") {
          this.userService.getUser(params['id']).subscribe(user => this.user = user);
        }
        else {
          this.user = new User();
          this.user.name = "Someone";
          this.user.email = "www.pdsa.com";
        }
      }
    });
  }

}
