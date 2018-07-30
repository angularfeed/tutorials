import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsArticlesComponent } from './ts-articles.component';

describe('TsArticlesComponent', () => {
  let component: TsArticlesComponent;
  let fixture: ComponentFixture<TsArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
