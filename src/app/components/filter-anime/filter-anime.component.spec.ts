import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAnimeComponent } from './filter-anime.component';

describe('FilterAnimeComponent', () => {
  let component: FilterAnimeComponent;
  let fixture: ComponentFixture<FilterAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
