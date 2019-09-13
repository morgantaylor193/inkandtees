import { TestBed, async } from '@angular/core/testing';
import { IntContact } from './contact';
import { RouterTestingModule } from '@angular/router/testing';

describe('IntContact', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        IntContact
      ]
    }).compileComponents();
  }));

  it('should create the home container', () => {
    const fixture = TestBed.createComponent(IntContact);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
