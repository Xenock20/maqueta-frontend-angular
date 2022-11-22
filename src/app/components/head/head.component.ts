import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  homeTilte:string = "Hola, soy Federico. FullStack Developer";
  homeInfo:string = "Soy de Argentina y tengo como titulo tecnico informatico profecional y personal, me dedico al desarrollo de aplicaciones web basados en Angular y Java";
  homeImg:string = "https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
