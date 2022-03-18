import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeTabComponent } from './anime-tab.component';

describe('AnimeTabComponent', () => {
  let component: AnimeTabComponent;
  let fixture: ComponentFixture<AnimeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
