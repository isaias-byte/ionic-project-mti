import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabModelPage } from './tab-model.page';

describe('TabModelPage', () => {
  let component: TabModelPage;
  let fixture: ComponentFixture<TabModelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
