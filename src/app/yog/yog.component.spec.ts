import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YogComponent } from './yog.component';

describe('YogComponent', () => {
  let component: YogComponent;
  let fixture: ComponentFixture<YogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
