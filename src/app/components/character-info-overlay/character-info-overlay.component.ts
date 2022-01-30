import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character.models';
import { InfoService } from 'src/app/services/info.service';
import { Location } from 'src/app/models/location.models';

@Component({
  selector: 'app-character-info-overlay',
  templateUrl: './character-info-overlay.component.html',
  styleUrls: ['./character-info-overlay.component.css']
})
export class CharacterInfoOverlayComponent implements OnInit {

  episodes: string[] = [];
  locations: Location[] = [];
  loading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Character,
    public dialogRef: MatDialogRef<CharacterInfoOverlayComponent>,
    private service: InfoService
  ) { }

  ngOnInit(): void {
    this.listEpisodes();
  }

  listEpisodes() {
    this.loading = true;
    this.data?.episode?.forEach(element => {
      const epi = element.split('https://rickandmortyapi.com/api/episode/');
      this.episodes.push(epi[1]);
    });

    console.log(this.episodes.toString());

    this.service.getEpisodes(this.episodes.toString()).subscribe({
      next: (v) => {
        if (v.length > 0) {
          this.locations = v;
        } else {
          this.locations = [v];
        }
      },
      error: (e) => { console.error(e); this.loading = false; },
      complete: () => { console.info('complete'); this.loading = false; }
    })

  }

  cancel() {
    this.dialogRef.close();
  }

}
