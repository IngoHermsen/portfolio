import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  showOverlay: boolean = false;

  @Input() project: Project = new Project();

  ngOnInit(): void {
    
  }

}
