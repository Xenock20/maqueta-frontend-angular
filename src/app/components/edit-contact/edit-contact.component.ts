import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor() { }

  email: string = "";
  ig: string = "";
  ln: string = "";
  github: string = "";

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
