import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();

    setTimeout( () =>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300 );
  }

}
