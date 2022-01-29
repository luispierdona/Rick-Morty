import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character.models';

@Component({
  selector: 'app-character-info-overlay',
  templateUrl: './character-info-overlay.component.html',
  styleUrls: ['./character-info-overlay.component.css']
})
export class CharacterInfoOverlayComponent implements OnInit {

  episodes: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Character,
    public dialogRef: MatDialogRef<CharacterInfoOverlayComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    // this.episodes = this.data?.episode;
    // const asd = this.episodes[0].split('https://rickandmortyapi.com/api/episode/');
    // console.log( asd );

    this.data?.episode?.forEach(element => {
      const epi = element.split('https://rickandmortyapi.com/api/episode/');
      this.episodes.push(epi[1]);
    });

    console.log(this.episodes);

  }

  cancel() {
    this.dialogRef.close();
  }

}
