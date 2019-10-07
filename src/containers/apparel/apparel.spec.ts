import { TestBed, async } from '@angular/core/testing';
import { IntApparel } from './apparel';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureImage } from 'src/components/feature-image/feature-image';

describe('IntApparel', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntApparel,
        FeatureImage
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntApparel);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
