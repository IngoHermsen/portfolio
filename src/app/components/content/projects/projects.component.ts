import { Component } from '@angular/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Join',
      usedTechs: ['Angular', 'Typescript', 'Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      link: 'https://ingo-hermsen.developerakademie.net/join/main',
      githubLink: 'https://github.com/IngoHermsen/Join',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'preview_join.png'
    },
    {
      title: 'Slack Clone',
      usedTechs: ['Javascript', 'HTML', 'CSS', 'API'],
      description: 'Instant messaging service, based on "Slack" ',
      link: 'https://ingo-hermsen.developerakademie.net/slack-clone/',
      githubLink: 'https://github.com/IngoHermsen/slack-clone/',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'preview_pokedex.png'
    },
    {
      title: 'El Pollo Loco',
      usedTechs: ['Javascript', 'HTML', 'CSS'],
      description: 'A simple Jump-and-Run-Game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      link: 'https://ingo-hermsen.developerakademie.net/elpolloloco/',
      githubLink: 'https://github.com/IngoHermsen/elPolloLoco/',
      jsDoc: true,
      jsDocLink: 'https://ingo-hermsen.developerakademie.net/elpolloloco/out/',
      imagePath: 'preview_elpolloloco.png'
    }

  ];
}
