import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/content/title/title.component';
import { AboutMeComponent } from './components/content/about-me/about-me.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { SkillsComponent } from './components/content/skills/skills.component';
import { ProjectComponent } from './components/content/project/project.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/content/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    OverlayPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
