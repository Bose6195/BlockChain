import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../Services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public nav: NavbarService ) { }

  showHeader: false;
  username: string;
  password: string;

  login(): void {
    if (this.username === 'bose' && this.password === 'bose') {
             this.router.navigate(['patient-profile']);
  } else {
    alert('Invalid Credential');
    this.username = '';
    this.password = '';

  }
}

  onClickSubmit(data) {
    this.router.navigate(['./patient-profile']);
    }

  ngOnInit() {  }

}
