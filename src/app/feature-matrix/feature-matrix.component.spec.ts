import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMatrixComponent } from './feature-matrix.component';

describe('FeatureMatrixComponent', () => {
  let component: FeatureMatrixComponent;
  let fixture: ComponentFixture<FeatureMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
