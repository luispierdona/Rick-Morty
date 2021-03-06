import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/models/character.models';
import { CharacterInfoOverlayComponent } from '../character-info-overlay/character-info-overlay.component';

@Component({
  selector: 'app-dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.css']
})
export class DashCardComponent implements OnInit {

  @Input() character: Character = {};
  
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  viewInfo() {
    const dialogRef = this.dialog.open(CharacterInfoOverlayComponent, {
      width: '1024px',
      minHeight: '500px',
      maxHeight: '90vh',
      data: this.character
    });
  }

}
