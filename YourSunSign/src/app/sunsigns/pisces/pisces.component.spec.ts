import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscesComponent } from './pisces.component';

describe('PiscesComponent', () => {
  let component: PiscesComponent;
  let fixture: ComponentFixture<PiscesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiscesComponent]
    });
    fixture = TestBed.createComponent(PiscesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
