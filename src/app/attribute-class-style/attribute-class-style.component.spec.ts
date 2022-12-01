import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeClassStyleComponent } from './attribute-class-style.component';

describe('AttributeClassStyleComponent', () => {
  let component: AttributeClassStyleComponent;
  let fixture: ComponentFixture<AttributeClassStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeClassStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
