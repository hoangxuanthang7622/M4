import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOutComponent } from './o-out.component';

describe('OOutComponent', () => {
  let component: OOutComponent;
  let fixture: ComponentFixture<OOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
