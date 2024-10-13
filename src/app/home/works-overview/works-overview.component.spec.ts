import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksOverviewComponent } from './works-overview.component';

describe('WorksOverviewComponent', () => {
  let component: WorksOverviewComponent;
  let fixture: ComponentFixture<WorksOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
