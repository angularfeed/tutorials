import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseArticlesComponent } from './firebase-articles.component';

describe('FirebaseArticlesComponent', () => {
  let component: FirebaseArticlesComponent;
  let fixture: ComponentFixture<FirebaseArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
