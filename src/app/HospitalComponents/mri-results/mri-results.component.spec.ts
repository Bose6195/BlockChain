import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MriResultsComponent } from './mri-results.component';

describe('MriResultsComponent', () => {
  let component: MriResultsComponent;
  let fixture: ComponentFixture<MriResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MriResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MriResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
