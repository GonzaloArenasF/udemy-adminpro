import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    let obs = new Observable( observer => {

      let contador: number = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        observer.next( contador ); // Envía una respuesta constante

        if ( contador === 3 ) {

          clearInterval( intervalo );
          observer.complete(); // Termina el observable

        } else if ( contador === 2 ) {
          clearInterval( intervalo );
          observer.error('No te detengas en 2');
        }

      }, 1000);

    });

    obs.retry(5).subscribe(
      resNext => console.log('Respuesta constante', resNext),
      error => console.error('Problemas', error),
      () => console.log('Terminamos')
    );

  }

  ngOnInit() { }

}
