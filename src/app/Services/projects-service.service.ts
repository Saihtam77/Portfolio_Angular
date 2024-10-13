import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './dataTypes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProjects() : Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects`);
  }
}
