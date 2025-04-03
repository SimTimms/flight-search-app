import dayjs from "dayjs";
import { SearchFormState } from "../types/index";
const NOW_DATE = dayjs();

export const defaultState: SearchFormState = {
  departureDate: NOW_DATE,
  departureTime: NOW_DATE,
  arrivalDate: NOW_DATE,
  arrivalTime: NOW_DATE,
  numberOfPassengers: 1,
  departureDateTime: NOW_DATE,
  arrivalDateTime: NOW_DATE,
};
