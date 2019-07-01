import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleorderComponent } from './multipleorder.component';

describe('MultipleorderComponent', () => {
  let component: MultipleorderComponent;
  let fixture: ComponentFixture<MultipleorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
