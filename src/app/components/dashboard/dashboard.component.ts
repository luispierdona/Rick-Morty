import { Component, OnInit } from '@angular/core';
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

  constructor(private service: InfoService) { }

  ngOnInit(): void {
    this.getListCharacters();
  }

  getListCharacters() {
    this.loading = true;
    this.service.listCharacters().subscribe({
      next: (v) => {
        console.log(v); 
        this.listCharacters = v.results;
        console.log(this.listCharacters); 
      },
      error: (e) => {console.error(e); this.loading = false;},
      complete: () => {console.info('complete'); this.loading = false;}
    })
  }


}
