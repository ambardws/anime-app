import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { ResponseModel } from '../models';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAnimeList(
    search?: string
  ): Observable<ResponseModel> {
    // let params = new HttpParams().set('ordering',ordering);
    if (search) {
      let params = new HttpParams().set('title', search);
      return this.http.get<ResponseModel>(`${env.BASE_URL}/anime`,{
        params: params,
      });
    } else {
      return this.http.get<ResponseModel>(`${env.BASE_URL}/anime`);
    }
  }
}
