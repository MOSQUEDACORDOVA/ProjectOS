import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorPAComponent } from './selector-pa.component';

describe('SelectorPAComponent', () => {
  let component: SelectorPAComponent;
  let fixture: ComponentFixture<SelectorPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorPAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
