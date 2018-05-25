import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/',
    tema: 'default.css'
  };

  constructor(
    @Inject(DOCUMENT) private _document
  ) {
    this.getLocalStorage();
  }

  /**
   *
   */
  setLocalStorage() {
    localStorage.setItem( 'ajustes', JSON.stringify( this.ajustes ) );
  }

  /**
   *
   */
  getLocalStorage() {

    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }

    this.aplicarTema(this.ajustes.tema);

  }

  /**
   *
   * @param link
   */
  aplicarTema(tema: string) {

    this.ajustes.tema = tema;

    let _url: string = this.ajustes.temaUrl + this.ajustes.tema + '.css';
    this._document.getElementById('tema').setAttribute('href', _url);

    this.aplicarCheck();
    this.setLocalStorage();

  }

  /**
   *
   */
  aplicarCheck() {

    let selectores = this._document.getElementsByClassName('selector');

    for (let selector of selectores) {

      if (selector.classList.contains(this.ajustes.tema + '-theme')) {
        selector.classList.add('working');
      } else {
        selector.classList.remove('working');
      }

    }

  }

}

/**
 * Determina el comportamiento del los datos
 */
interface Ajustes {
  temaUrl: string;
  tema: string;
}
