import { Dayjs } from "dayjs";

export type SearchFormState = {
  departureDate: Dayjs;
  departureTime: Dayjs;
  arrivalDate: Dayjs;
  arrivalTime: Dayjs;
  numberOfPassengers: number;
  departureDateTime: Dayjs;
  arrivalDateTime: Dayjs;
};

export type FlightType = {
  _id: string;
  flightNumber?: string | null | undefined;
  departureDateTime: string;
  arrivalDateTime: string;
  airline?: string;
  price?: number | null | undefined;
  distance: number;
  departureCity?: string | null | undefined;
  arrivalCity?: string | null | undefined;
  co2Emission?: number | null | undefined;
  totalCo2Emission?: number | null | undefined;
};
