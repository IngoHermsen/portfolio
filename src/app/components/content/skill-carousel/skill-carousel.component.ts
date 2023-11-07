import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-carousel',
  templateUrl: './skill-carousel.component.html',
  styleUrls: ['./skill-carousel.component.scss']
})
export class SkillCarouselComponent implements OnInit {
  @Output() changeActiveSkills = new EventEmitter<any>;
  skillArticles: any[] = [];
  activeIndex: number = 0;

  constructor(
    public translate: TranslateService,
  ) {

  }


  ngOnInit(): void {
    this.skillArticles = [
      { 
        titleTranslationRef: 'teamworkTitle',
        textTranslationRef: 'teamworkText',
        skills: ['HTML', 'CSS', 'JavaScript', 'GIT', 'Scrum']
      },
      { 
        titleTranslationRef: 'userInterfaceTitle',
        textTranslationRef: 'userInterfaceText',
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Material Design']
      },
      { 
        titleTranslationRef: 'asyncProgrammingTitle',
        textTranslationRef: 'asyncProgrammingText',
        skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Rest-Api', 'Angular']
      },
      { 
        titleTranslationRef: 'complexAppsTitle',
        textTranslationRef: 'complexAppsText',
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
