import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/models/models';

@Component({
  selector: 'app-edit-expe',
  templateUrl: './edit-expe.component.html',
  styleUrls: ['./edit-expe.component.css']
})
export class EditExpeComponent implements OnInit {

  constructor() { }

  list : experiencia[] = [];
  edirExpTitle: string = "";
  fechaInicio: Date | null = new Date;
  fechaFin: Date | null = new Date;
  edirExpDes: string = "";

  ngOnInit(): void {
  }

  onSubmit() {
    const item: experiencia = {
      titulo: this.edirExpTitle,
      fechaInicio: this.fechaInicio,
      fechaFinal: this.fechaFin,
      descrip: this.edirExpDes
    };
    this.list.push(item);

    // Reiniciamos los valores de los campos del formulario.
    this.edirExpTitle = '';
    this.fechaInicio = null;
    this.fechaFin = null;
    this.edirExpDes = '';
  }

}
