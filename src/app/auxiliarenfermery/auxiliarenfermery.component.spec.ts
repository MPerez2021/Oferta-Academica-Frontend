import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarenfermeryComponent } from './auxiliarenfermery.component';

describe('AuxiliarenfermeryComponent', () => {
  let component: AuxiliarenfermeryComponent;
  let fixture: ComponentFixture<AuxiliarenfermeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliarenfermeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarenfermeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
