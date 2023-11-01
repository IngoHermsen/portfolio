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
      type: 'Projekt-Management',
      title: 'JOIN',
      usedTechs: ['Angular', 'Typescript', 'Firebase'],
      description: 'Übersichtliche Verwaltung von Aufgaben nach dem Kanban-Prinzip. Nutzerbasierte Projekte und Statusanpassung per Drag & Drop.',
      link: 'https://join.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/Join-ext',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'join_xl.png'
    },
    {
      type: 'Instant-Messaging',
      title: 'SLACK-CLONE',
      usedTechs: ['Angular', 'Typescript', 'Firebase'],
      description: 'Nach dem Vorbild von "Slack". Enthält typische Messagingfunktionen wie Channel Management und Thread-basiertes Kommentarsystem. Nutzer- und Nachrichtenverwaltung mit Firebase Datenbank.',
      link: 'https://slackclone.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/slack-clone/tree/finalEdits',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'slack-clone_xl.png'
    },
    {
      type: 'Browsergame',
      title: 'EL POLLO LOCO',
      usedTechs: ['Javascript', 'HTML', 'CSS'],
      description: 'Prototyp eines Jump-And-Run Game mit Fokus auf objektorientierter Programmierung. Hilf Pepe sein Dorf zu verteidigen.',
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
      description: 'Eine persönliche Vorstellung meiner Fähigkeiten und Ambitionen als Frontendentwickler.',
      link: 'https://www.ingo-hermsen.de',
      githubLink: 'https://github.com/IngoHermsen/portfolio',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'portfolio_xl.png'
    }
  ];
}
