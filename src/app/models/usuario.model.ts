/**
 * @author Gonzalo A. Arenas Flores <gonzalo@produccionesbandada.cl>
 * @since 18-06-2018
 *
 * Modelo para los usuarios
 *
 */
export class Usuario {

  constructor (
    public nombre: String,
    public email: String,
    public password: String,
    public _id?: String,
    public google?: Boolean,
    public img?: string,
    public role: String = 'USER',
  ) { }

}
