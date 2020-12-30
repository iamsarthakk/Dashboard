import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user: User;
  users?: User[];

  constructor(private route: ActivatedRoute, 
    private router: Router, private userService: UserService) {
      this.user = new User();
   }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
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
