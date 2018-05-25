import { Component, OnInit } from '@angular/core';

declare function initAll(); // assets/js/custom.js

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initAll();
  }

}
