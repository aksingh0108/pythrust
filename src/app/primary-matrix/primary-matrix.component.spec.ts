import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryMatrixComponent } from './primary-matrix.component';

describe('PrimaryMatrixComponent', () => {
  let component: PrimaryMatrixComponent;
  let fixture: ComponentFixture<PrimaryMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
