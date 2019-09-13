import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Footer } from './footer';
import { LinkHelper } from 'src/services/link-helper.service';
import { MockLinkHelper } from 'src/services/link-helper.service.mock';

describe('Footer', () => {
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Footer
      ],
      providers: [
        { provide: LinkHelper, useClass: MockLinkHelper },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);

  }));

  it('should create the footer component', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a copywrite year or range defined', () => {
    const app = fixture.debugElement.componentInstance;
    app._generateCopyWrite();
    
    if(app.startYear === app.currentYear){
      expect(app.copywrite).toEqual(`${app.currentYear}`)
    } else {
      expect(app.copywrite).toEqual(`${app.startYear} - ${app.currentYear}`);
    }
  })
});
