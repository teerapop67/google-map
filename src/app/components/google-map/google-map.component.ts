import {
  Component,
  ViewChild,
  ElementRef,
  NgZone,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LatLngType } from 'src/app/interface/interface';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit {
  map!: any;

  @Input() personalForm: FormGroup | any = {};

  @ViewChild('searchOrigin') searchElementRefOrigin!: ElementRef;

  @ViewChild('searchDestination') searchElementRefDestination!: ElementRef;

  directionsRenderer: any;
  directionsService: any;

  originLatLng: LatLngType = { lat: 0, lng: 0 };
  destinationLatLng: LatLngType = { lat: 0, lng: 0 };

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.initDirection();
    this.initMap();
    this.setDirectionWhenPageChange();
  }

  get getPersonalForm() {
    return this.personalForm.controls;
  }

  private initDirection() {
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsService = new google.maps.DirectionsService();
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

  ngAfterViewInit(): void {
    this.setAutocompleteMap();
  }

  private setAutocompleteMap() {
    let autocompleteOrigin = new google.maps.places.Autocomplete(
      this.searchElementRefOrigin.nativeElement
    );

    this.getPlaceLatLng(autocompleteOrigin, 'origin');

    let autocompleteDestination = new google.maps.places.Autocomplete(
      this.searchElementRefDestination.nativeElement
    );

    this.getPlaceLatLng(autocompleteDestination, 'destination');
  }

  private getPlaceLatLng(
    autocomplete: google.maps.places.Autocomplete,
    type: string
  ) {
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
    });
  }

  private assignValueToEachDirection(
    type: string,
    place: google.maps.places.PlaceResult | any
  ) {
    console.log('place:', place);
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
        this.assignValueToFormSubmit(
          response.routes[0].legs[0].start_address,
          response.routes[0].legs[0].end_address,
          response.routes[0].legs[0]['distance'].text
        );
        this.directionsRenderer.setDirections(response);
      })
      .catch((e: any) => window.alert('Directions request failed due to '));
  }

  private setDirectionWhenPageChange() {
    if (this.getPersonalForm['destinationLatLng'].value) {
      this.originLatLng = this.getPersonalForm['originLatLng'].value;
      this.destinationLatLng = this.getPersonalForm['destinationLatLng'].value;

      this.calculateAndDisplayRoute();
    }
  }

  private assignValueToFormSubmit(
    origin: string,
    destination: string,
    km: number
  ) {
    this.personalForm.get('origin')?.setValue(origin);
    this.personalForm.get('destination')?.setValue(destination);
    this.personalForm.get('km')?.setValue(km);
    this.personalForm.get('originLatLng')?.setValue(this.originLatLng);
    this.personalForm
      .get('destinationLatLng')
      ?.setValue(this.destinationLatLng);
  }
}
