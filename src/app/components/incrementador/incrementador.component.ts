import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  @ViewChild( 'txtProgress' ) txtProgress: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onChanges ( newValue: number ) {

    if (newValue === null || newValue < 0) {
      newValue = 0;
    } else if ( newValue > 100 || newValue.toString().length > 3 ) {
      newValue = 100;
    }

    this.progreso = newValue;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

  }

  cambiarValor (valor) {

    let nuevoProgreso: number = this.progreso + valor;

    if (nuevoProgreso <= 0) { this.progreso = 0; }
    if (nuevoProgreso >= 100) { this.progreso = 100; }

    if (nuevoProgreso > 0 && nuevoProgreso < 100) {
      this.progreso += valor;
    }

    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();

  }

}
