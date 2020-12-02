import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent{

  constructor(
    private _http: HttpClient
  ) { 
    this._http.get('https://github.com/Dake2612/prueba1/commits/main').subscribe
    (data => console.log(data))
  }

}
