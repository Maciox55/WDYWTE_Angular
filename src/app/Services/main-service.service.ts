import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Range, PlaceType } from '../components/home/home.component';
import {Result} from '../models/Result';
import { SearchDetails } from '../models/SearchDetails';
import { Geolocation } from '../models/Geolocation';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  searchQuery: SearchDetails;
  results: Observable<Result[]>
  geolocation: Geolocation;
  constructor(private http: HttpClient) {
    this.geolocation = new Geolocation();
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

  public requestPlaces(z: SearchDetails){
      this.http.post('/api/searchAround/', {params: this.searchQuery})
      .subscribe((res)=>{
          console.log(res);
          return res;
          
      });
  };

}



// .subscribe((res: any) => {
//   console.log(res);
  // this.setresults(res.results);
  // this.geolocation = res.data.geo as Geolocation;
  // this.results = res.data.results as Result[];
//   return of(res.data);
// }