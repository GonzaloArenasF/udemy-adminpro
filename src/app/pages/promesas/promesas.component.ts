import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.ejecutarContador().then(
      mensaje => console.log('Listo!!', mensaje)
    ).catch(
      error => console.error('Problema con la promesa', error)
    );

  }

  ngOnInit() { }

  /**
   *
   */
  ejecutarContador (): Promise<string> {

    let promesa: Promise<string> = new Promise( (resolve, reject) => {

      let contador: number = 0;

      let intervalo: any = setInterval( () => {

        contador += 1;

        if (contador === 3) {
          resolve('Contador alcanzado');
          clearInterval(intervalo);
        }

      }, 1000);

    });

    return promesa;

  }

}
