import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = [
    {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'line',
      'leyenda': 'El pan se come con'
    },
    {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'bar',
      'leyenda': 'Entrevistados'
    },
    {
      'labels': ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      'data':  [
        {'data': [65, 59, 90, 81, 56, 55, 40], 'label': 'Series A'},
        {'data': [28, 48, 40, 19, 96, 27, 100], 'label': 'Series B'}
      ],
      'type': 'radar',
      'leyenda': '¿Qué haces?'
    },
    {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
    {
      'labels': ['No', 'Si'],
      'data':  [10, 90],
      'type': 'pie',
      'leyenda': '¿Aprobado el Curso?'
    },
    {
      'labels': ['Freelance', 'Producciones Bandada', 'Liquid Labs'],
      'data':  [10, 50, 40],
      'type': 'polarArea',
      'leyenda': 'Participación'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
