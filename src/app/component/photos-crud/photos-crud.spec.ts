import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosCrud } from './photos-crud';

describe('PhotosCrud', () => {
  let component: PhotosCrud;
  let fixture: ComponentFixture<PhotosCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
