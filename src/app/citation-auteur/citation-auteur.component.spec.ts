import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationAuteurComponent } from './citation-auteur.component';

describe('CitationAuteurComponent', () => {
  let component: CitationAuteurComponent;
  let fixture: ComponentFixture<CitationAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationAuteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
