import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabSummaryPage } from './tab-summary.page';

describe('TabSummaryPage', () => {
  let component: TabSummaryPage;
  let fixture: ComponentFixture<TabSummaryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
