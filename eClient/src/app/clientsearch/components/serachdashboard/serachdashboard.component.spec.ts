import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachdashboardComponent } from './serachdashboard.component';

describe('SerachdashboardComponent', () => {
  let component: SerachdashboardComponent;
  let fixture: ComponentFixture<SerachdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
