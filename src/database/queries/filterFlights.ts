import { gql } from "@apollo/client";

const FILTER_FLIGHTS = gql`
  query FilterFlights(
    $departureDateTime: DateTime!
    $arrivalDateTime: DateTime!
    $numberOfPassengers: Int!
  ) {
    filterFlights(
      filter: {
        departureDateTime: $departureDateTime
        arrivalDateTime: $arrivalDateTime
        numberOfPassengers: $numberOfPassengers
      }
    ) {
      _id
      airline {
        _id
        airlineName
      }
      arrivalDateTime
      departureDateTime
      co2Emission
      arrivalCity {
        _id
        cityName
        coordinates {
          coordinates
          type
        }
      }
      departureCity {
        _id
        cityName
        coordinates {
          coordinates
          type
        }
      }
      distance
      flightNumber
      numberOfPassengers
      price
      totalCo2Emission
    }
  }
`;

export { FILTER_FLIGHTS };
