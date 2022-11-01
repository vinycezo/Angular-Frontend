import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCitationComponent } from './new-citation.component';

describe('NewCitationComponent', () => {
  let component: NewCitationComponent;
  let fixture: ComponentFixture<NewCitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
