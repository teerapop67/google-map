export interface FareRateType {
  distance: string;
  amountReimbursement: number;
}

export interface LatLngType {
  lat: number;
  lng: number;
}

export interface SummaryFareType {
  kmAmount: number;
  fareTravel: number;
  summary: number;
}

export interface TransportType {
  typeOfTransport: string | null;
  workName: string | null;
  expresswayFare: string;
  fareTravel: string;
  evidence: any;
}
