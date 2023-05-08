import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagittariusComponent } from './sagittarius.component';

describe('SagittariusComponent', () => {
  let component: SagittariusComponent;
  let fixture: ComponentFixture<SagittariusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SagittariusComponent]
    });
    fixture = TestBed.createComponent(SagittariusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
