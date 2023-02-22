import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  name: string = "";
  tituloHome: string = "";
  desHome: string= "";
  imagen: File = new File([], "");

  onSubmit() {
    const formData = new FormData();
    formData.append('nombre', this.name);
    formData.append('titulo', this.tituloHome);
    formData.append('descripcion', this.desHome);
    formData.append('imagen', this.imagen, this.imagen.name);

    // Aquí puedes enviar el formulario a través de una solicitud HTTP
    // utilizando HttpClient de Angular.
    // Por ejemplo:
    // this.http.post('URL del servidor', formData).subscribe(...);

    formData.forEach((x) => {
      console.log(x);
    });
  }

  onFileSelected(event:any) {
    this.imagen = event.target.files[0];
  }
}
