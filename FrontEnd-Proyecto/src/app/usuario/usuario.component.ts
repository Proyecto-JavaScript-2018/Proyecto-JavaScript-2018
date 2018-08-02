import { Component, OnInit } from '@angular/core';

import {UsuarioService} from "../usuario.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  usuario;


  usernamefac:string;
  passwordfac: string;


  constructor( private _usuario: UsuarioService) { }


  ngOnInit() {

    this.cargarUsuario();
    this.usernamefac=this.usuario[0].username;
    this.passwordfac=this.usuario[0].password;

  }
  cargarUsuario(){
    this.usuario=this._usuario.getUsuario();
  }

  esNulos(){
    if(
      this.usernamefac==null||
      this.passwordfac==null){
      return true;
    }else{
      return false;
    }
  }

  guardarInformacion(event, formData){
    // console.log(event);
    console.log(formData);
    this.usernamefac=formData.value.username;
    this.passwordfac=formData.value.password;

  }

}
