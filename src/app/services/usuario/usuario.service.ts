import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// URLs servicios
import { SERVICE_CREAR_USUARIO } from '../../config/config';

// Modelo
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /**
   * Constructor
   */
  constructor(
    public http: HttpClient
  ) { }

  /**
   * Creación del usuario
   * @param usuario
   * @returns Observable
   */
  public crear (usuario: Usuario): Observable<any> {

    return this.http.post( SERVICE_CREAR_USUARIO, usuario )
    .pipe(
      map ( (res: any) => {

        swal('Usuario creado', res.usuario.email, 'success');
        return res.usuario;

      })
    );

  }

}
