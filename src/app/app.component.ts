import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NavbarService } from '../../src/app/Services/navbar.service';
import { LoginComponent } from '../../src/app/HospitalComponents/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';
    showHead = false;

    @Output() messageEvent = new EventEmitter<string>();
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
    this.nav.hide();
    }

    constructor(private router: Router, public nav: NavbarService) {



      // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
          if (event instanceof NavigationStart) {
           if (event.url === '/login') {
            this.showHead = false;
          } else {
             this.showHead = true;
          }
        }
      });
  }
  }





