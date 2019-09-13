import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Header
      ],
    }).compileComponents();
  }));

  it('should create the header component', () => {
    const fixture = TestBed.createComponent(Header);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
