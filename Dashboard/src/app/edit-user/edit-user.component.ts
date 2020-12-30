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
  users?: User[];

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
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  isEmail(search:string):boolean
    {
        var  serchfind:boolean;

        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        serchfind = regexp.test(search);
        return serchfind
    }

    isExists(email: string): boolean{
      if (this.users?.find(e=>e.email==email)!=undefined)
      return true;

      return false;

    }
}
