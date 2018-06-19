/**
 * @author Gonzalo A. Arenas Flores <gonzalo@produccionesbandada.cl>
 * @since 18-06-2018
 *
 * Componente de registro
 *
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import swal from 'sweetalert';

// Servicios
import { UsuarioService } from '../services/service.index';

// Modelos
import { Usuario } from '../models/usuario.model';

// Importación de funciones externas a Angular
declare function initAll();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  /**
   * Constructor
   */
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  /**
   * Operaciones al cargar el componente
   */
  ngOnInit() {

    initAll();

    this.setReactiveForms();   // ReactiveForms - Control del formulario
    this.setValoresDefecto();  // Valores por defecto

  }

  /**
   * Retorna el ReactiveForms
   */
  private setReactiveForms (): void {

    this.forma = new FormGroup( {
      nombre: new FormControl( null, Validators.required ),
      email: new FormControl( null, [ Validators.required, Validators.email ]),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      condiciones: new FormControl( false ),
    }, { validators: this.validarPassword( 'password', 'password2' ) } );

  }

  /**
   * Función para setear valores por defecto al formulario
   */
  private setValoresDefecto (): void {

    this.forma.setValue({
      nombre: 'Gonzalo',
      email: 'gonzalo@111.cl',
      password: '1234567890',
      password2: '1234567890',
      condiciones: true,
    });

  }

  /**
   * Valida que las password coincidan
   * @param password
   * @param password2
   */
  private validarPassword (password: string, password2: string) {

    return ( group: FormGroup ) => {

      let pass1 = group.controls[password].value;
      let pass2 = group.controls[password2].value;

      if ( pass1 === pass2 ) { return null; }

      return {
        estadoPassword: false
      };

    };

  }

  /**
   * Registro del usuario
   */
  public registrar () {

    if ( this.forma.invalid ) {
      return;
    }

    if ( !this.forma.value.condiciones ) {
      swal( 'Problemas con tus datos', 'Debes aceptar las condiciones', 'warning' );
      return;
    }

    let usuario = new Usuario (
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    this.usuarioService.crear( usuario )
      .subscribe( res => {
        this.router.navigate( ['/login'] );
      },
    err => {
      swal( err.error.mensaje , err.error.errors.message, 'error' );
    });

  }

}
