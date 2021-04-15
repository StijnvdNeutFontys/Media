import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaaltijdenComponent } from './maaltijden.component';

describe('MaaltijdenComponent', () => {
  let component: MaaltijdenComponent;
  let fixture: ComponentFixture<MaaltijdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaaltijdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaaltijdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
