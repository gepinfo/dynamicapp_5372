import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilescreateComponent } from './filescreate.component';

describe('FilescreateComponent', () => {
  let component: FilescreateComponent;
  let fixture: ComponentFixture<FilescreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilescreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});