import { Component, ViewChild } from '@angular/core';
import { MapDirectionService } from './service/map-direction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'My first AGM project';
  start_end_mark: any = [];

  // @ViewChild('map') map: any;

  lat = 13.736717;
  lng = 100.523186;

  latlng: any = [
    [13.736717, 100.523186],
    [13.859108, 100.521652],
    [7.878978, 98.398392],
  ];

  constructor(private mapDirectionService: MapDirectionService) {
    // this i write because to display a marks on first place and last place
    this.start_end_mark.push(this.latlng[0]);
    this.start_end_mark.push(this.latlng[this.latlng.length - 1]);
  }

  ngOnInit() {
    this.initMap();
    // const route = this.mapDirectionService.getRoute('sad', 'asdas');
    // console.log('Start%%5', route.subscribe());
  }

  initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 7,
        center: { lat: 15.8686135, lng: 100.9918364 },
      }
    );

    directionsRenderer.setMap(map);

    this.calculateAndDisplayRoute(directionsService, directionsRenderer);
  }

  private calculateAndDisplayRoute(
    directionsService: any,
    directionsRenderer: google.maps.DirectionsRenderer
  ) {
    directionsService
      .route({
        origin: { lat: 15.8686135, lng: 100.9918364 },
        destination: { lat: 13.7373794, lng: 100.5129349 },
        travelMode: google.maps.TravelMode['DRIVING'],
      })
      .then((response: any) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e: any) =>
        window.alert('Directions request failed due to ' + status)
      );
  }
  // getRoute(start: string, end: string): any {
  //   fetch(this.url, {
  //     method: 'GET',
  //     mode: 'no-cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache',
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }
}
