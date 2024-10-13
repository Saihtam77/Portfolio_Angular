import { Component } from '@angular/core';
import { ImageCardComponent } from '../../SharedComponents/image-card/image-card.component';

@Component({
  selector: 'app-works-overview',
  standalone: true,
  imports: [ImageCardComponent],
  templateUrl: './works-overview.component.html',
  styleUrl: './works-overview.component.css'
})
export class WorksOverviewComponent {

}
