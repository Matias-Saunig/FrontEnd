import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogArgComponent } from './log-arg.component';

describe('LogArgComponent', () => {
  let component: LogArgComponent;
  let fixture: ComponentFixture<LogArgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogArgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogArgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
