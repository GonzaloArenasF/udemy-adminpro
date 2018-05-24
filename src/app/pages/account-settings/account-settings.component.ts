import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    public _ajustes: SettingsService
  ) { }

  ngOnInit() {
    this._ajustes.aplicarCheck();
  }

  /**
   *
   * @param link
   */
  cambiarTema (link: any) {
    this._ajustes.aplicarTema(link.getAttribute('data-theme'));
  }

}
