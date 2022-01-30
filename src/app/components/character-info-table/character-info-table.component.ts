import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import { Location } from 'src/app/models/location.models';

@Component({
  selector: 'app-character-info-table',
  templateUrl: './character-info-table.component.html',
  styleUrls: ['./character-info-table.component.css']
})
export class CharacterInfoTableComponent implements OnInit {

  @Input() locations: Location[] = [];

  displayedColumns: string[] = ['name', 'type', 'dimension', 'created'];

  constructor() { }

  ngOnInit(): void { }

  

}
