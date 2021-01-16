import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemSettingsComponent } from './todo-item-settings.component';

describe('TodoItemSettingsComponent', () => {
  let component: TodoItemSettingsComponent;
  let fixture: ComponentFixture<TodoItemSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
