import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[];
  
  constructor(
    private translate: TranslateService,
  ) {
    this.projects = [
    {
      type: 'Instant Messenger',
      title: 'DABubble',
      usedTechs: ['Angular', 'Typescript', 'Firestore (Firebase)'],
      translateDescRef: 'daBubbleDesc',
      link: 'https://dabubble.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/DABubble',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'dabubble_xl.png'
    },
    
    {
      type: 'Projekt-Management',
      title: 'JOIN',
      usedTechs: ['Angular', 'Typescript', 'Firestore (Firebase)'],
      translateDescRef: 'projManDesc',
      link: 'https://join.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/Join-ext',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'join_xl.png'
    },

    {
      type: 'Browsergame',
      title: 'EL POLLO LOCO',
      usedTechs: ['Javascript', 'HTML', 'CSS'],
      translateDescRef: 'polloDesc',
      link: 'https://elpolloloco.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/elPolloLoco/',
      jsDoc: true,
      jsDocLink: 'https://elpolloloco.ingo-hermsen.de/jsdoc_out/index.html',
      imagePath: 'elPolloLoco_xl.png'
    },

    {
      type: 'Portfolio',
      title: 'ingo-hermsen.de',
      usedTechs: ['Angular', 'Typescript', 'Material Design'],
      translateDescRef: 'portfolioDesc',
      link: 'https://www.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/portfolio',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'portfolio_xl.png'
    }
  ];
  } 

}
