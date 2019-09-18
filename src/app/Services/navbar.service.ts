import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NavbarService {
  visible: boolean;
  showHeader = false;

  constructor() {
    this.visible = false;
  }
  hide() {
    this.visible = false;
  }
  show() {
    this.visible = false;
  }
  toggle() {
    this.visible = !this.visible;
  }
}
