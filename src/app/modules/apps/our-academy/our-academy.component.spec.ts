import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAcademyComponent } from './our-academy.component';

describe('OurAcademyComponent', () => {
  let component: OurAcademyComponent;
  let fixture: ComponentFixture<OurAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAcademyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
