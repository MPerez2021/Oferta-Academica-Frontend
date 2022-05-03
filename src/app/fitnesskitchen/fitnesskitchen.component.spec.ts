import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesskitchenComponent } from './fitnesskitchen.component';

describe('FitnesskitchenComponent', () => {
  let component: FitnesskitchenComponent;
  let fixture: ComponentFixture<FitnesskitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnesskitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnesskitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
