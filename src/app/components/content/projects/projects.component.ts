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
      title: 'Projekt Management | JOIN',
      usedTechs: ['Angular', 'Typescript', 'Firebase'],
      description: 'Übersichtliche Verwaltung von Aufgaben nach dem Kanban-Prinzip durch Personenzuweisung und Statusanpassung per Drag & Drop.',
      link: 'https://ingo-hermsen.developerakademie.net/join/main',
      githubLink: 'https://github.com/IngoHermsen/Join',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'join_xl.png'
    },
    {
      title: 'Instant-Messaging | SLACK-CLONE',
      usedTechs: ['Angular', 'Typescript', 'Firebase'],
      description: 'Nach dem Vorbild von "Slack". Enthält typische Messagingfunktionen wie Channel Management und Thread-basiertes Kommentarsystem. Nutzer- und Nachrichtenverwaltung mit Firebase Datenbank.',
      link: 'https://ingo-hermsen.developerakademie.net/slack-clone/',
      githubLink: 'https://github.com/IngoHermsen/slack-clone/',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'slack-clone_xl.png'
    },
    {
      title: 'Jump-and-Run Game | EL POLLO LOCO',
      usedTechs: ['Javascript', 'HTML', 'CSS'],
      description: 'Einfaches Jump-And-Run-Projekt mit objektorientierter Programmierung. Hilf Pepe sein Dorf zu verteidigen.',
      link: 'https://ingo-hermsen.developerakademie.net/elpolloloco/',
      githubLink: 'https://github.com/IngoHermsen/elPolloLoco/',
      jsDoc: true,
      jsDocLink: 'https://ingo-hermsen.developerakademie.net/elpolloloco/out/',
      imagePath: 'elPolloLoco_xl.png'
    },

    {
      title: 'Portfolio | ingo-hermsen.de',
      usedTechs: ['Angular', 'Typescript', 'Material Design'],
      description: 'Eine persönliche Vorstellung meiner Fähigkeiten und Ambitionen als Frontendentwickler.',
      link: 'https://www.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/portfolio',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'portfolio_xl.png'
    }

  ];
}
