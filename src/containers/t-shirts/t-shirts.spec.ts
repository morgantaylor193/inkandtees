import { TestBed, async } from '@angular/core/testing';
import { IntTShirts } from './t-shirts';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureImage } from 'src/components/feature-image/feature-image';
import { LinkHelper } from 'src/services/link-helper.service';
import { MockLinkHelper } from 'src/services/link-helper.service.mock';

describe('IntTShirts', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntTShirts,
        FeatureImage
      ],
      providers: [
        { provide: LinkHelper, useClass: MockLinkHelper },
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntTShirts);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});


