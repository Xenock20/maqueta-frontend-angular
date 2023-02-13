import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {


  // Array temporanea hasta conectar a una base de datos
  proyects:any[] = [
    {
      img: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
      title: "Nombre del proyecto",
      des: "Descripcion del proyecto y con que tecnologia se trabajo o que empresa se trabajo"
    },
    {
      img: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
      title: "Nombre del proyecto",
      des: "Descripcion del proyecto y con que tecnologia se trabajo o que empresa se trabajo"
    },
    {
      img: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
      title: "Nombre del proyecto",
      des: "Descripcion del proyecto y con que tecnologia se trabajo o que empresa se trabajo"
    },
    {
      img: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
      title: "Nombre del proyecto",
      des: "Descripcion del proyecto y con que tecnologia se trabajo o que empresa se trabajo"
    },
    {
      img: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
      title: "Nombre del proyecto",
      des: "Descripcion del proyecto y con que tecnologia se trabajo o que empresa se trabajo"
    },
    {
      img: "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
      title: "Nombre del proyecto",
      des: "Descripcion del proyecto y con que tecnologia se trabajo o que empresa se trabajo"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
