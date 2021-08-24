import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosComponent } from './retiros.component';

describe('ContratosComponent', () => {
  let component: ContratosComponent;
  let fixture: ComponentFixture<ContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
