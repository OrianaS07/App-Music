import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {catchError, map, mergeMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient ) { 
  }

  private skipById(listTracks: TrackModel[], id: number):Promise<TrackModel[]>{
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/tracks`)
      .pipe(
        map(({data}:any)=>{
          return data
        })
      );
  }

  getAllRamdon$(): Observable<any>{
    return this.httpClient.get<any>(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({data}:any)=> this.skipById(data,1)),
      catchError((err) =>{
        const {status, statusText} = err;
        console.log('error', status,statusText);
        return of([])
      })
      // map((dataRevertida)=>{
      //   return dataRevertida.filter((tracks:TrackModel) => tracks._id !== 1)
      // })
    );
  }
}
