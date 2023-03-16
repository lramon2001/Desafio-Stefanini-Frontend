import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatalhaComponent } from './batalha.component';

describe('BatalhaComponent', () => {
  let component: BatalhaComponent;
  let fixture: ComponentFixture<BatalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatalhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
