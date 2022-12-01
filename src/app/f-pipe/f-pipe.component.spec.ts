import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPipeComponent } from './f-pipe.component';

describe('FPipeComponent', () => {
  let component: FPipeComponent;
  let fixture: ComponentFixture<FPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
