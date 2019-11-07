import { TestBed, async } from '@angular/core/testing';
import { IntProduct } from './product';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureImage } from 'src/components/feature-image/feature-image';

describe('IntApparelBrand', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntProduct,
        FeatureImage
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntProduct);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
