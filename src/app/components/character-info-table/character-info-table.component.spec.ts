import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoTableComponent } from './character-info-table.component';

describe('CharacterInfoTableComponent', () => {
  let component: CharacterInfoTableComponent;
  let fixture: ComponentFixture<CharacterInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
