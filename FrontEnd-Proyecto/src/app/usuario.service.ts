import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuario=[];

  constructor() {
    this._usuario = [
      {
        id:1,

        username: 'sails',
        password: 'sails',

      }];
  }

  public getUsuario(){
    return this._usuario;
  }
}
