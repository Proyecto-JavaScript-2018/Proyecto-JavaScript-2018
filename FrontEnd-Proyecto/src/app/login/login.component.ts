import { Component, OnInit } from '@angular/core';
import * as Cookies from 'js-cookie';
import {HttpClient} from '@angular/common/http';
import {CredencialesService} from '../credenciales.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  passwordServer = '';
  usuario = [];
  usuarioId = 0;

  constructor(private httpClient: HttpClient,
              private _credenciales: CredencialesService,
              private _credencialesService: CredencialesService,
              private _router: Router, ) {
  }

  ngOnInit() {
  }

  onNameKeyUpUsername(event: any) {
    this.username = event.target.value;
  }

  onNameKeyUpPassword(event: any) {
    this.password = event.target.value;
  }


  getProfile() {
    this.httpClient.get(`http://localhost:1337/Usuario?username=${this.username}`).subscribe((data: any[]) => {
        this.usuario = data;
        this.passwordServer = this.usuario[0]['password'];
        this.usuarioId = this.usuario[0]['id'];
        console.log(this.passwordServer);

        if (this._credencialesService.login(this.password, this.passwordServer) === true) {
          const rutaHomeUsuario = ['/usuario', this.usuarioId, 'home'];
          this._router.navigate(rutaHomeUsuario);
          // const Cookies2 = Cookies.noConflict();
          Cookies.set('cookieWeb', {username: this.username, id: this.usuarioId, estado: 'true'});
          // this._actorService.guardarUsuario(this.usuarioId);
        } else {
          console.log('error');
        }
      }
    );


  }

}
