import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardHorizontalComponent } from './image-card-horizontal.component';

describe('ImageCardHorizontalComponent', () => {
  let component: ImageCardHorizontalComponent;
  let fixture: ComponentFixture<ImageCardHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCardHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
