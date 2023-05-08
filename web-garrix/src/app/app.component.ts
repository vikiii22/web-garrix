import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cumpleaños de Garrix';
  opciones = [
    {1: 'HairSo'},
    {2: 'Turramitica'},
    {3: 'Cars (mcqueen)'},
    {4: 'PinBA'},
  ]
}
