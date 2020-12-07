import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() menuState = new EventEmitter();


constructor(private toggleService: ToggleService){

}
  opened: boolean = true;
  showMenu = false; /* false by default, since hidden */
  
  ngOnInit(): void {
   
  }

  toggleSideBar(){
    console.log("inside toggleMenu");
      this.showMenu = !this.showMenu;
      this.menuState.emit(this.showMenu);
    this.toggleService.showSidebar = false;
  }

}
