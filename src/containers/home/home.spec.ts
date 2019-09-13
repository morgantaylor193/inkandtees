import { TestBed, async } from '@angular/core/testing';
import { IntHome } from './home';
import { RouterTestingModule } from '@angular/router/testing';

describe('IntHome', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntHome
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntHome);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
