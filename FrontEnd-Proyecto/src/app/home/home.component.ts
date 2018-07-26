import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    this.ocultarElementos();
  }

  ocultarElementos() {

    const mostrarCardWarning = <HTMLFormElement>document.getElementById('card_Alerta');
    mostrarCardWarning.style.display = 'none';

  }
}
