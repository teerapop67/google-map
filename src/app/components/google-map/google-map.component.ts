import { Component } from '@angular/core';
import { MapDirectionService } from 'src/app/service/map-direction.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent {
  map: any;

  constructor(private mapDirectionService: MapDirectionService) {}

  ngOnInit() {
    this.initMapStart();
    // const route = this.mapDirectionService.getRoute('sad', 'asdas');

    // route.subscribe((res) => {
    //   console.log('resฟหกฟหกฟหก: ', res);
    // });

    this.test();
  }

  async test() {
    const query = new URLSearchParams({
      key: 'AIzaSyCsq54nA1YkGvh--X8YwZO-MMOu2IkpAJg',
    }).toString();

    await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?destination=วัดชัยชนะ&origin=บางปู&${query}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => console.log('DATATATATA:', data));
  }

  private initMapStart() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 7,
        center: { lat: 13.736717, lng: 100.523186 },
      }
    );

    directionsRenderer.setMap(this.map);

    this.calculateAndDisplayRoute(directionsService, directionsRenderer);
  }

  private calculateAndDisplayRoute(
    directionsService: any,
    directionsRenderer: google.maps.DirectionsRenderer
  ) {
    directionsService
      .route({
        origin: { lat: 15.8686135, lng: 100.9918364 },
        destination: { lat: 13.746389, lng: 100.535004 },
        travelMode: google.maps.TravelMode['DRIVING'],
      })
      .then((response: any) => {
        //get KM
        console.log('res: ', response.routes[0].legs[0]['distance'].text);
        directionsRenderer.setDirections(response);
      })
      .catch((e: any) => window.alert('Directions request failed due to '));

    this.isSearchNearbyPlace();
  }

  private isSearchNearbyPlace() {
    var searchOrigin = new google.maps.LatLng(13.746389, 100.535004); // Statue of Liberty
    var request = {
      location: searchOrigin,
      fields: ['name', 'geometry'],
      radius: 100,
    };

    var service = new google.maps.places.PlacesService(this.map);

    this.getValueAfterSearch(service, request);
  }

  private getValueAfterSearch(
    service: google.maps.places.PlacesService,
    request: any
  ) {
    service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var distance = 10000;
        console.log('result search: ', results);
      }
    });
  }
}
