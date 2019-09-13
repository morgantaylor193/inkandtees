import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Header } from './header';
import { LinkHelper } from 'src/services/link-helper.service';
import { MockLinkHelper } from 'src/services/link-helper.service.mock';

describe('Header', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Header
      ],
      providers: [
        { provide: LinkHelper, useClass: MockLinkHelper },
      ]
    }).compileComponents();
  }));

  it('should create the header component', () => {
    const fixture = TestBed.createComponent(Header);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
