import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { LatLngType } from 'src/app/interface/interface';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent {
  map!: any;
  @ViewChild('searchOrigin') searchElementRefOrigin!: ElementRef;

  @ViewChild('searchDestination') searchElementRefDestination!: ElementRef;

  directionsRenderer: any;
  directionsService: any;

  originLatLng: LatLngType = { lat: 0, lng: 0 };
  destinationLatLng: LatLngType = { lat: 0, lng: 0 };

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsService = new google.maps.DirectionsService();
    this.initMap();
  }

  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    this.setAutocompleteMap();
  }

  private initMap() {
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 7,
        center: { lat: 13.736717, lng: 100.523186 },
      }
    );

    this.directionsRenderer.setMap(this.map);
  }

  private setAutocompleteMap(): void {
    let autocompleteOrigin = new google.maps.places.Autocomplete(
      this.searchElementRefOrigin.nativeElement
    );

    this.getPlaceLatLng(autocompleteOrigin, 'origin');

    let autocompleteDestination = new google.maps.places.Autocomplete(
      this.searchElementRefDestination.nativeElement
    );

    this.getPlaceLatLng(autocompleteDestination, 'destination');
  }

  getPlaceLatLng(autocomplete: google.maps.places.Autocomplete, type: string) {
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        this.assignValueToEachDirection(type, place);
      });

      console.log('Lat: ', this.destinationLatLng, 'Lng: ', this.originLatLng);
    });
  }

  private assignValueToEachDirection(
    type: string,
    place: google.maps.places.PlaceResult | any
  ) {
    if (type === 'destination') {
      this.destinationLatLng = {
        lat: place.geometry.location?.lat(),
        lng: place.geometry.location?.lng(),
      };
    } else {
      this.originLatLng = {
        lat: place.geometry.location?.lat(),
        lng: place.geometry.location?.lng(),
      };
    }

    if (this.destinationLatLng.lat !== 0 && this.originLatLng.lat !== 0) {
      this.calculateAndDisplayRoute();
      // this.originLatLng = { lat: 0, lng: 0 };
      // this.destinationLatLng = { lat: 0, lng: 0 };
    }
  }

  private calculateAndDisplayRoute() {
    this.directionsService
      .route({
        origin: { lat: this.originLatLng.lat, lng: this.originLatLng.lng },
        destination: {
          lat: this.destinationLatLng.lat,
          lng: this.destinationLatLng.lng,
        },

        travelMode: google.maps.TravelMode['DRIVING'],
      })
      .then((response: any) => {
        //get KM
        console.log('res: ', response.routes[0].legs[0]['distance'].text);
        this.directionsRenderer.setDirections(response);
      })
      .catch((e: any) => window.alert('Directions request failed due to '));
  }
}
