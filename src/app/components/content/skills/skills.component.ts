import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  highlightedSkills: string[] = [];

  skills: Skill[] = [
    { name: 'Angular', fileName: 'angular.png', highlight: false, inProgress: false },
    { name: 'TypeScript', fileName: 'typescript.png', highlight: false, inProgress: false },
    { name: 'JavaScript', fileName: 'javascript.png', highlight: false, inProgress: false },
    { name: 'HTML', fileName: 'html.png', highlight: false, inProgress: false },
    { name: 'Firebase', fileName: 'firebase.png', highlight: false, inProgress: false },
    { name: 'GIT', fileName: 'git.png', highlight: false, inProgress: false },
    { name: 'CSS', fileName: 'css.png', highlight: false, inProgress: false },
    { name: 'Rest-Api', fileName: 'rest-api.png', highlight: false, inProgress: false },
    { name: 'Scrum', fileName: 'scrum.png', highlight: false, inProgress: false },
    { name: 'Material Design', fileName: 'material-design.png', highlight: false, inProgress: false },
    { name: 'PHP', fileName: 'php.png', highlight: true, inProgress: true },
    { name: 'SQL', fileName: 'sql.png', highlight: true, inProgress: true }
  ]

  constructor(
    private translate: TranslateService,
  ) {

  }

  ngOnInit(): void {

  }

  setHighlightedSkills(emittedSkills: any) {
    this.highlightedSkills = emittedSkills;
    this.skills.forEach(skill => {
        skill.highlight = false;
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

