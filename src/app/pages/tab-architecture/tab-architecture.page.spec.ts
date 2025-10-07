import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabArchitecturePage } from './tab-architecture.page';

describe('TabArchitecturePage', () => {
  let component: TabArchitecturePage;
  let fixture: ComponentFixture<TabArchitecturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabArchitecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
