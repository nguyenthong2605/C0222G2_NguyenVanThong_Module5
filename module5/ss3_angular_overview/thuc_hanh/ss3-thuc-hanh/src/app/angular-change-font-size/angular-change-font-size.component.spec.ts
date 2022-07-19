import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChangeFontSizeComponent } from './angular-change-font-size.component';

describe('AngularChangeFontSizeComponent', () => {
  let component: AngularChangeFontSizeComponent;
  let fixture: ComponentFixture<AngularChangeFontSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularChangeFontSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChangeFontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
