import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { LoginComponent } from './components/page/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadComponent } from './components/head/head.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { EditComponent } from './components/edit/edit.component';
import { NaveditComponent } from './components/navedit/navedit.component';
import { Pagina404Component } from './components/page/pagina404/pagina404.component';
import { EditpageComponent } from './components/page/editpage/editpage.component';
import { ExperinceComponent } from './components/experince/experince.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditHomeComponent } from './components/edit-home/edit-home.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { EditEduComponent } from './components/edit-edu/edit-edu.component';
import { EditExpeComponent } from './components/edit-expe/edit-expe.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    HeadComponent,
    SkillsComponent,
    ProyectComponent,
    EducationComponent,
    FooterComponent,
    LoginformComponent,
    EditComponent,
    NaveditComponent,
    Pagina404Component,
    EditpageComponent,
    ExperinceComponent,
    ImagenComponent,
    ContactComponent,
    EditHomeComponent,
    EditSkillComponent,
    EditEduComponent,
    EditExpeComponent,
    EditProjectComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
