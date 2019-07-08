import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorAuthFormComponent } from './prior-auth-form.component';

describe('PriorAuthFormComponent', () => {
  let component: PriorAuthFormComponent;
  let fixture: ComponentFixture<PriorAuthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorAuthFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorAuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
