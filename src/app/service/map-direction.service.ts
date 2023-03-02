import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MapDirectionService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  dataRoute: any;

  private urlApi: string =
    'https://maps.googleapis.com/maps/api/directions/json?destination=วัดชัยชนะ&origin=บางปู&key=AIzaSyCsq54nA1YkGvh--X8YwZO-MMOu2IkpAJg';

  constructor(private http: HttpClient) {}

  getRoute(start: string, end: string): Observable<any> {
    console.log('url:', this.urlApi);
    return this.http
      .get(
        'https://maps.googleapis.com/maps/api/geocode/json?latlng=13.746389,100.535004&key=AIzaSyCsq54nA1YkGvh--X8YwZO-MMOu2IkpAJg'
      )
      .pipe();

    // const configApi = this.isConfigGetRoute();

    // axios(configApi)
    //   .then((response: any) => {
    //     console.log('asdasd', JSON.stringify(response.data));
    //     // this.dataRoute = JSON.stringify(response.data);
    //   })
    //   .catch(function (error: any) {
    //     console.log(error);
    //   });

    // return this.dataRoute;
  }

  private isConfigGetRoute() {
    // var config = {
    //   method: 'get',
    //   url: encodeURI('https://api.publicapis.org/entries'),
    //   headers: {},
    // };
    // return config;
  }
}
