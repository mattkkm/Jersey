/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindJerseyComponent } from './find-jersey.component';

describe('FindJerseyComponent', () => {
  let component: FindJerseyComponent;
  let fixture: ComponentFixture<FindJerseyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJerseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
