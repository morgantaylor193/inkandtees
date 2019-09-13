import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app';
import { Header } from 'src/components/header/header';
import { LinkHelper } from 'src/services/link-helper.service';
import { MockLinkHelper } from 'src/services/link-helper.service.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        Header
      ],
      providers: [
        { provide: LinkHelper, useClass: MockLinkHelper },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
