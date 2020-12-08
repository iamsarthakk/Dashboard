import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  subMenuState:any = false;
  col = 12;
  opened: boolean = true;

  
  burgerClicked(evnt: any){
    this.subMenuState = evnt;
    // if(!this.subMenuState){
    //   this.col=12;
    // }
    // else{
    //   this.col=9;
    // }
    console.log("inside burgerClicked: pls. change showMenu to be:",this.subMenuState.toggle);
  }
}
