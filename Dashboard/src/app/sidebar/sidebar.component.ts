import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() subMenuState: any;
  
  constructor() { }
  // opened: boolean = true;
  // showMenu = true;
  // toggleMenu() {
  //     this.showMenu = !this.showMenu;
  //  }

  ngOnInit(): void {
  }
  // ngOnChanges(){
  //   console.log("inside ngOnChanges with subMenuState: ",this.subMenuState );
  //   this.showMenu = this.subMenuState;
  // }

}
