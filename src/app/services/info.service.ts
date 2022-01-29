import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { ListAPIResponse } from '../models/commons.models';
import { Character } from '../models/character.models';
import { Location } from '../models/location.models';

const APIs = {
  listCharacters: `${environment.apiUrl}character/`,
  singleLocation: `${environment.apiUrl}location/{id}`,
  episodesOf: `${environment.apiUrl}location/{episodes}`,
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

  getSingleLocation(id: number): Observable<ListAPIResponse> {
    const url = APIs.singleLocation.split('{id}').join(`${id}`);
    return this.httpClient.get<ListAPIResponse>(`${url}`)
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

  getEpisodes(episodes: string): Observable<any> {
    const url = APIs.episodesOf.split('{episodes}').join(`${episodes}`);
    return this.httpClient.get<any>(`${url}`)
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
