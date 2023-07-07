import { Component } from '@angular/core';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {


  skills: Skill[] = [
    {name: "Angular", fileName: 'angular.png'},
    {name: "Typescript", fileName: 'typescript.png'},
    {name: "Javascript", fileName: 'javascript.png'},
    {name: "HTML", fileName: 'html.png'},
    {name: "Firebase", fileName: 'firebase.png'},
    {name: "GIT", fileName: 'git.png'},
    {name: "CSS", fileName: 'css.png'},
    {name: "Rest-Api", fileName: 'rest-api.png'},
    {name: "Scrum", fileName: 'scrum.png'},
    {name: "Material Design", fileName: 'material-design.png'}
  ]
}

