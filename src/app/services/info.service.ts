import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { ListAPIResponse } from '../models/commons.models';
import { Character } from '../models/character.models';

const APIs = {
  listCharacters: `${environment.apiUrl}character/`,

};

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }


  listCharacters(): Observable<ListAPIResponse> {
    return this.httpClient.get<ListAPIResponse>(APIs.listCharacters)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        }
        )
      );
  }
}
