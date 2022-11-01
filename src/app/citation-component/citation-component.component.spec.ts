import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitationComponentComponent } from './citation-component.component';

describe('CitationComponentComponent', () => {
  let component: CitationComponentComponent;
  let fixture: ComponentFixture<CitationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
