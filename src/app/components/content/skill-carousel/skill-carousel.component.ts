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
        text: 'text 1',
        skills: ['Angular', 'Typescript', 'GIT', ]
 
      },
      {
        text: 'text 2',
        skills: ['Firebase', 'GIT']
      },
      {
        text: 'text 3',
        skills: ['Rest-Api', 'Scrum']
      },
      {
        text: 'text 4',
        skills: ['Angular', 'Typescript', 'Material Design']
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
