import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestResultsComponent } from './lab-test-results.component';

describe('LabTestResultsComponent', () => {
  let component: LabTestResultsComponent;
  let fixture: ComponentFixture<LabTestResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
