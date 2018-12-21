import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearshComponentComponent } from './searsh-component.component';

describe('SearshComponentComponent', () => {
  let component: SearshComponentComponent;
  let fixture: ComponentFixture<SearshComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearshComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearshComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
