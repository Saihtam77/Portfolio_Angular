import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsServiceService } from '../Services/projects-service.service';
import { Project } from '../Services/dataTypes';
import { ActualComponent } from './actual/actual.component';
import { WorksOverviewComponent } from './works-overview/works-overview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PresentationComponent,
    TechComponent,
    ActualComponent,
    WorksOverviewComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projects: Project[];

  constructor(private projectService: ProjectsServiceService) {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
