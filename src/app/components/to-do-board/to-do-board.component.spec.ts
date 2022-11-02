import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoBoardComponent } from './to-do-board.component';

describe('ToDoBoardComponent', () => {
  let component: ToDoBoardComponent;
  let fixture: ComponentFixture<ToDoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
