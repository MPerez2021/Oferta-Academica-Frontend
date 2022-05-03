import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarfarmacyComponent } from './auxiliarfarmacy.component';

describe('AuxiliarfarmacyComponent', () => {
  let component: AuxiliarfarmacyComponent;
  let fixture: ComponentFixture<AuxiliarfarmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliarfarmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarfarmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
