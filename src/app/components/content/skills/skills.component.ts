import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  highlightSkills: string[] = []

  skills: Skill[] = [
    { name: 'Angular', fileName: 'angular.png', highlight: false },
    { name: 'Typescript', fileName: 'typescript.png', highlight: false },
    { name: 'Javascript', fileName: 'javascript.png', highlight: false },
    { name: 'HTML', fileName: 'html.png', highlight: false },
    { name: 'Firebase', fileName: 'firebase.png', highlight: false },
    { name: 'GIT', fileName: 'git.png', highlight: false },
    { name: 'CSS', fileName: 'css.png', highlight: false },
    { name: 'Rest-Api', fileName: 'rest-api.png', highlight: false },
    { name: 'Scrum', fileName: 'scrum.png', highlight: false },
    { name: 'Material Design', fileName: 'material-design.png', highlight: false }
  ]

  ngOnInit(): void {

  }

  setHighlightedSkills(emitValue: any) {
    this.highlightSkills = emitValue;
    this.skills.forEach(skill => {
      skill.highlight = false
    })

    this.highlightSkills.forEach(skillName => {
      this.skills.map(skill => {
        if (skill.name == skillName) {
          skill.highlight = true;
        }
      })
    })  
  }

}

