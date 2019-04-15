import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Range, PlaceType } from '../components/home/home.component';
import {Result} from '../models/Result';
import { SearchDetails } from '../models/SearchDetails';
import { Geoloaction } from '../models/geolocation';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  searchQuery: SearchDetails;
  results: Result[];
  geolocation: Geoloaction;
  constructor(private http: HttpClient) {
    this.geolocation = new Geoloaction();
  }
  public getResults(): any {
    const resultsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next({results: this.results, geo: this.geolocation});
      }, 1000);
    });
    return resultsObservable;
  }
  getGeo() {
    return of(this.geolocation);
  }
  public setSearchQuery(sq: SearchDetails) {
    console.log('FROM MAIN SERVICE' + sq);
    this.searchQuery = sq;
  }
  public setresults(r) {
    this.results = r;
  }

  public requestPlaces(z: SearchDetails) {
      // this.http.post<Result[]>('/api/searchAround/',{params: this.searchQuery})
      // .subscribe((res:any)=>{
      //   console.log(res);
      //   //this.setresults(res.results);
      //   this.geolocation = res.data.geo as Geoloaction;
      //   this.results = res.data.results as Result[];
      //   console.log(this.results);
      // }
      // ,error => console.log(error));
      this.http.post<any>('/api/searchAround/', {params: this.searchQuery})
      .pipe(map(res => {
        this.results = res.data.results;
        console.log(res.data.results);
      }));
  }

}
