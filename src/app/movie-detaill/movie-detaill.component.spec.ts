import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetaillComponent } from './movie-detaill.component';

describe('MovieDetaillComponent', () => {
  let component: MovieDetaillComponent;
  let fixture: ComponentFixture<MovieDetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetaillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
