import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { ListAPIResponse } from '../models/commons.models';

const APIs = {
  listCharacters: `${environment.apiUrl}character/`,
  listCharactersWithParam: `${environment.apiUrl}character/?page={page}`,
  singleLocation: `${environment.apiUrl}location/{id}`,
  episodesOf: `${environment.apiUrl}location/{episodes}`,
};

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private httpClient: HttpClient) { }

  listCharacters(page: number): Observable<ListAPIResponse> {
    const url = APIs.listCharactersWithParam.split('{page}').join(`${page}`);

    return this.httpClient.get<ListAPIResponse>(url)
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
