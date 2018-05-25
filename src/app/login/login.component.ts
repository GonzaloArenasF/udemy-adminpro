import { Component, OnInit, RootRenderer } from '@angular/core';
import { Router } from '@angular/router';

declare function initAll();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    initAll();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }

}
