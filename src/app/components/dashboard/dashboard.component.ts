import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Character } from 'src/app/models/character.models';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loading: boolean = false;
  listCharacters: Character[] = [];
  gridColumns = 4;

  pageSize = 20;
  totalSize = 0;
  pageIndex = 0;

  constructor(private service: InfoService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getListCharacters(1);
  }

  getListCharacters(page: number) {
    this.loading = true;
    this.service.listCharacters(page).subscribe({
      next: (v) => {
        this.listCharacters = v.results;
        this.totalSize = v.info.count ? v.info.count : 0;
      },
      error: (e) => { console.error(e); this.loading = false; },
      complete: () => {
        this.loading = false;
        this._snackBar.open('Amazing info loaded', 'Close', {
          duration: 3000,
          panelClass: "snackbar"
        });
      }
    })
  }

  getServerData(event: PageEvent) {
    this.getListCharacters(event?.pageIndex);
  }

}
