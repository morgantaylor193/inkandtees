import { TestBed, async } from '@angular/core/testing';
import { IntTShirts } from './t-shirts';
import { RouterTestingModule } from '@angular/router/testing';

describe('IntTShirts', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntTShirts
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntTShirts);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
