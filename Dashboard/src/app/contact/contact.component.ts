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
  }

}
