import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skill-carousel',
  templateUrl: './skill-carousel.component.html',
  styleUrls: ['./skill-carousel.component.scss']
})
export class SkillCarouselComponent implements OnInit {
  @Output() changeActiveSkills = new EventEmitter<any>;
  skillArticles: any[] = [];
  activeIndex: number = 0;


  ngOnInit(): void {
    this.skillArticles = [
      { 
        headline: 'Teamwork',
        text: 'Erfahrung in Gruppenarbeit und Grundkenntnisse von agilen Methoden.',
        skills: ['HTML', 'CSS', 'JavaScript', 'GIT', 'Scrum']
      },
      { 
        headline: 'Benutzerfreundliche Oberfläche',
        text: 'Umsetzung responsiver Applikationen, auch mit Hilfe von CSS-Frameworks und UI-Libraries.',
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Material Design']
      },
      { 
        headline: 'Asynchrone Programmierung',
        text: 'Zugriff auf Datenbanken und Rest-Api unter Verwendung von asynchronen Methoden und RXJS-Konzepten.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Rest-Api', 'Angular']
      },
      { 
        headline: 'Komplexe Anwendungen',
        text: 'Sehr guter Umgang mit den Anforderungen aufwändiger Applikationen unter Verwendung eines JS-Frameworks.',
        skills: ['HTML', 'CSS', 'Angular', 'TypeScript', 'Firebase']
      }
    ]
    this.emitActiveSkills()
    
  }

  goToArticle(index: number) {
    if(index == -1) {
      this.activeIndex = this.skillArticles.length -1
    } else if (index == this.skillArticles.length) {
      this.activeIndex = 0
    } else {
      this.activeIndex = index;
    }
    this.emitActiveSkills()
  }

  emitActiveSkills()  {
    this.changeActiveSkills.emit(this.skillArticles[this.activeIndex].skills)
  }

}
