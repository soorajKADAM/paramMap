import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraComponent } from './libra.component';

describe('LibraComponent', () => {
  let component: LibraComponent;
  let fixture: ComponentFixture<LibraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraComponent]
    });
    fixture = TestBed.createComponent(LibraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
