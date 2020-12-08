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
  col=12;
  
  data ={
    "toggle": this.showMenu,
    "col": this.col
  } 
  ngOnInit(): void {
   
  }

  toggleSideBar(){
    console.log("inside toggleMenu");
      this.data.toggle = !this.data.toggle;
      if(!this.data.toggle){
        this.data.col=9;
      }
      else{
        this.data.col=12;
      }
      this.menuState.emit(this.data);
    this.toggleService.showSidebar = false;
  }

}
