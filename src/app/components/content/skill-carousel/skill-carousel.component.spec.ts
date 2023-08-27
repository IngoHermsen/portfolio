import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCarouselComponent } from './skill-carousel.component';

describe('SkillCarouselComponent', () => {
  let component: SkillCarouselComponent;
  let fixture: ComponentFixture<SkillCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
