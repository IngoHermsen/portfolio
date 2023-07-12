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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks within projects using drag and drop. Assign users and categories',
      link: 'https://ingo-hermsen.developerakademie.net/join/main',
      githubLink: 'https://github.com/IngoHermsen/Join',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'preview_join.png'
    },
    {
      title: 'Slack Clone',
      usedTechs: ['Angular', 'Typescript', 'Firebase'],
      description: 'Instant messaging service based on "Slack". Includes main functions like channel managements and messaging in a thread based structure',
      link: 'https://ingo-hermsen.developerakademie.net/slack-clone/',
      githubLink: 'https://github.com/IngoHermsen/slack-clone/',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'preview_pokedex.png'
    },
    {
      title: 'El Pollo Loco',
      usedTechs: ['Javascript', 'HTML', 'CSS'],
      description: 'A simple Jump-and-Run-Game based on an object-oriented approach. Help Pepe defending his village by throwing bottles on enemies.',
      link: 'https://ingo-hermsen.developerakademie.net/elpolloloco/',
      githubLink: 'https://github.com/IngoHermsen/elPolloLoco/',
      jsDoc: true,
      jsDocLink: 'https://ingo-hermsen.developerakademie.net/elpolloloco/out/',
      imagePath: 'preview_elpolloloco.png'
    },

    {
      title: 'Portfolio',
      usedTechs: ['Angular', 'Typescript', 'Material Design'],
      description: 'You are already using it. Thanks for reading that far',
      link: 'https://ingo-hermsen.developerakademie.net/elpolloloco/',
      githubLink: 'https://github.com/IngoHermsen/elPolloLoco/',
      jsDoc: true,
      jsDocLink: 'https://ingo-hermsen.developerakademie.net/elpolloloco/out/',
      imagePath: 'preview_elpolloloco.png'
    }

  ];
}
