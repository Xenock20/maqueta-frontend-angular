import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/models';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor() { }

  titulo: string = "";
  imagen: string = "";
  descrip: string = "";
  demo: string = "";
  code: string = "";
  github: string = "";
  list: project[] = [];

  ngOnInit(): void {
  }

  onSubmit() {
    const item : project  = {
      titulo: this.titulo,
      img: this.imagen,
      descrip: this.descrip,
      demo: this.demo,
      code: this.code
    };
    this.list.push(item);

    // Reiniciamos los valores de los campos del formulario.
    this.titulo = '';
    this.imagen = '';
    this.descrip = '';
    this.demo = '';
    this.code = '';
  }

  onFileSelected(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagen = reader.result as string;
    };
  }

  onSubmitGitHub(){

  }
}
