import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MapDirectionService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  private url: string =
    'https://maps.googleapis.com/maps/api/directions/json?destination=วัดชัยชนะ&origin=เยาวราช&key=AIzaSyCsq54nA1YkGvh--X8YwZO-MMOu2IkpAJg';

  constructor(private http: HttpClient) {}

  getRoute(start: string, end: string): Observable<any> {
    return this.http.get(this.url, { headers: this.httpHeaders });
  }
}
