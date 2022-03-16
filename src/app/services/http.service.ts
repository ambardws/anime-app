import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { ResponseModel } from '../models';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
 //Use Subject
  // private sendSort = new BehaviorSubject(0);
  // currentStatus = this.sendSort.asObservable();

  // changeStatus(status: number) {
  //   this.sendSort.next(status)
  // }

  constructor(private http: HttpClient) { }

  getAnimeList(
    sort?: number,
    search?: string,
  ): Observable<ResponseModel> {
    // console.log(sort)
    // let params = new HttpParams().set('formats', sort);
    console.log(sort)
    console.log(search);
    if (search) {
      let params = new HttpParams().set('title', search);
      return this.http.get<ResponseModel>(`${env.BASE_URL}/anime`,{
        params: params,
      });
    } else if (sort) {
      let params = new HttpParams().set('formats', sort);
      return this.http.get<ResponseModel>(`${env.BASE_URL}/anime`,{
        params: params,
      });
    } else {
      return this.http.get<ResponseModel>(`${env.BASE_URL}/anime`);
    }
  }
}
