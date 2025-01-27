import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringViewComponent } from './monitoring-view.component';

describe('MonitoringViewComponent', () => {
  let component: MonitoringViewComponent;
  let fixture: ComponentFixture<MonitoringViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
