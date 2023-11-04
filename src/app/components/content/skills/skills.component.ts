import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  highlightedSkills: string[] = []

  skills: Skill[] = [
    { name: 'Angular', fileName: 'angular.png', highlight: false },
    { name: 'TypeScript', fileName: 'typescript.png', highlight: false },
    { name: 'JavaScript', fileName: 'javascript.png', highlight: false },
    { name: 'HTML', fileName: 'html.png', highlight: false },
    { name: 'Firebase', fileName: 'firebase.png', highlight: false },
    { name: 'GIT', fileName: 'git.png', highlight: false },
    { name: 'CSS', fileName: 'css.png', highlight: false },
    { name: 'Rest-Api', fileName: 'rest-api.png', highlight: false },
    { name: 'Scrum', fileName: 'scrum.png', highlight: false },
    { name: 'Material Design', fileName: 'material-design.png', highlight: false }
  ]

  constructor(
    private translate: TranslateService,
  ) {

  }

  ngOnInit(): void {

  }

  setHighlightedSkills(emitValue: any) {
    this.highlightedSkills = emitValue;
    this.skills.forEach(skill => {
      skill.highlight = false
    })

    this.highlightedSkills.forEach(skillName => {
      this.skills.map(skill => {
        if (skill.name == skillName) {
          skill.highlight = true;
        }
      })
    })  
  }

}

