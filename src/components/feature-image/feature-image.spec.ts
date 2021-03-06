import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureImage } from './feature-image';

describe('FeatureImage', () => {
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FeatureImage
      ],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureImage);

  }));

  it('should create the feature image component', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
