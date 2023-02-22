import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  desSkill: string = "";
  items = [
    { label: 'HTML', value: 'des-html', checked: false },
    { label: 'CSS', value: 'des-css', checked: false },
    { label: 'JavaScript', value: 'des-js', checked: false },
    { label: 'Java', value: 'des-jv', checked: false },
    { label: 'Angular', value: 'des-angular', checked: false },
    { label: 'React', value: 'des-react', checked: false },
    { label: 'Python', value: 'des-py', checked: false },
    { label: 'Data Base', value: 'des-db', checked: false }
  ];


  onSubmit() {
    const selectedItems = this.items.filter(item => item.checked).map(item => item.value);
    const formData = {
      descripcion: this.desSkill,
      items: selectedItems
    };

    // Aquí puedes enviar el formulario a través de una solicitud HTTP
    // utilizando HttpClient de Angular.
    // Por ejemplo:
    // this.http.post('URL del servidor', formData).subscribe(...);
  }

}
