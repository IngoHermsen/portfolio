import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/content/title/title.component';
import { AboutMeComponent } from './components/content/about-me/about-me.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ProjectsComponent } from './components/content/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
