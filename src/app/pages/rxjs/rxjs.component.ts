import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map, retry, catchError, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  private subscripcion: Subscription;

  constructor () {

    this.subscripcion = this.regresaObservable ()
      .subscribe(
        resNext => console.log('Respuesta constante', resNext),
        error => console.error('Problemas', error),
        () => console.log('Terminamos')
      );

  }

  ngOnInit () { }

  ngOnDestroy () {
    this.subscripcion.unsubscribe(); // Quita el observerbable al salir de la página
  }

  /**
   *
   */
  regresaObservable (): Observable<any> {

    let obs: Observable<any> = new Observable( observer => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next( salida ); // Envía una respuesta constante

        // if ( contador === 3 ) {

        //   clearInterval( intervalo );
        //   observer.complete(); // Termina el observable

        // }

        // if ( contador === 2 ) {
        //   clearInterval( intervalo );
        //   observer.error('No te detengas en 2');
        // }

      }, 50);

    }).pipe(

      retry(3), // Intentos ante un error

      map( (res: any) => { // Preprocesamiento de la respuesta antes de su envío
        return res.valor;
      }),

      filter( (valor, numCiclo) => { // Filtra el resultado del observable
        return ( (valor % 2) === 1 ) ? true : false;
      }),

      catchError(err => of([err])) // Manejo de los errores

    );

    return obs;

  }

}
