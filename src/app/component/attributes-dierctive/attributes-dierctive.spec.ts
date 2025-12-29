import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesDierctive } from './attributes-dierctive';

describe('AttributesDierctive', () => {
  let component: AttributesDierctive;
  let fixture: ComponentFixture<AttributesDierctive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributesDierctive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributesDierctive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
