import { TestBed, async } from '@angular/core/testing';
import { IntPricing } from './pricing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureImage } from 'src/components/feature-image/feature-image';
import { LinkHelper } from 'src/services/link-helper.service';
import { MockLinkHelper } from 'src/services/link-helper.service.mock';

describe('IntPricing', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntPricing,
        FeatureImage
      ],
      providers: [
        { provide: LinkHelper, useClass: MockLinkHelper },
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntPricing);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});


