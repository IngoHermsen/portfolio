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

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
