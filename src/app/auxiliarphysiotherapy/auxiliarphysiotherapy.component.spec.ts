import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarphysiotherapyComponent } from './auxiliarphysiotherapy.component';

describe('AuxiliarphysiotherapyComponent', () => {
  let component: AuxiliarphysiotherapyComponent;
  let fixture: ComponentFixture<AuxiliarphysiotherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliarphysiotherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarphysiotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
