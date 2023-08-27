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
import { TooltipModule } from 'primeng/tooltip';
import { CarouselModule } from 'primeng/carousel';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/content/navigation/navigation.component';
import { NavLinksComponent } from './components/content/nav-links/nav-links.component';
import { PublicMediaLinksComponent } from './components/content/public-media-links/public-media-links.component';
import { FooterComponent } from './components/content/footer/footer.component';
import { LegalNoticeComponent } from './components/policy/legal-notice/legal-notice.component';
import { DataProtectionComponent } from './components/policy/data-protection/data-protection.component';
import { MainComponent } from './components/main/main.component';
import { SkillCarouselComponent } from './components/content/skill-carousel/skill-carousel.component';


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
    NavLinksComponent,
    PublicMediaLinksComponent,
    FooterComponent,
    LegalNoticeComponent,
    DataProtectionComponent,
    MainComponent,
    SkillCarouselComponent,
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
    TooltipModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
