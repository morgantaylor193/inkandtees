import { TestBed, async } from '@angular/core/testing';
import { IntTShirts } from './t-shirts';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureImage } from 'src/components/feature-image/feature-image';

describe('IntTShirts', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntTShirts,
        FeatureImage
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntTShirts);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
