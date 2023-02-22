import { Component, OnInit } from '@angular/core';
import { education } from 'src/app/models/education';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  constructor() { }

  list : education[] = [];

  ngOnInit(): void {
  }

  edirEduTitle: string = "";
  fechaInicio: Date | null = new Date;
  fechaFin: Date | null = new Date;
  ubicacion: string = "";

  onSubmit() {
    const item : education = {
      titulo: this.edirEduTitle,
      fechaInicio: this.fechaInicio,
      fechaFinal: this.fechaFin,
      ubicacion: this.ubicacion
    };
    this.list.push(item);

    // Reiniciamos los valores de los campos del formulario.
    this.edirEduTitle = '';
    this.fechaInicio = null;
    this.fechaFin = null;
    this.ubicacion = '';
  }

}
