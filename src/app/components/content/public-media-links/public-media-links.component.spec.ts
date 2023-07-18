import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMediaLinksComponent } from './public-media-links.component';

describe('PublicMediaLinksComponent', () => {
  let component: PublicMediaLinksComponent;
  let fixture: ComponentFixture<PublicMediaLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMediaLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicMediaLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
