import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../SharedComponents/progress-bar/progress-bar.component';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {

}
