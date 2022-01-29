import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoOverlayComponent } from './character-info-overlay.component';

describe('CharacterInfoOverlayComponent', () => {
  let component: CharacterInfoOverlayComponent;
  let fixture: ComponentFixture<CharacterInfoOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfoOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
