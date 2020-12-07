import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private _showSidebar = false;
  constructor() { }
  
  public get showSidebar(): boolean{
    this._showSidebar = !this._showSidebar;
    return this._showSidebar;
  }
  public set showSidebar(v : boolean) {
    this._showSidebar = v;
  }
}
