import React from "react";
import { useQuery } from "@apollo/client";
import { FILTER_FLIGHTS } from "../database/queries/filterFlights"; // Assuming your query is exported
import { Dayjs } from "dayjs";
import FlightCard from "./FlightCard";
import { FlightType } from "../types";

interface QueryResultProps {
  departureDateTime: Dayjs | null;
  arrivalDateTime: Dayjs | null;
  numberOfPassengers: number;
}

const QueryResult: React.FC<QueryResultProps> = ({
  departureDateTime,
  arrivalDateTime,
  numberOfPassengers,
}: QueryResultProps) => {
  const { loading, error, data } = useQuery(FILTER_FLIGHTS, {
    variables: {
      departureDateTime: departureDateTime,
      arrivalDateTime: arrivalDateTime,
      numberOfPassengers: numberOfPassengers,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data.filterFlights.length === 0) return <p>No Results</p>;

  return (
    <div className="flight-card-container">
      {data.filterFlights.map((item: any) => {
        const flightDetails: FlightType = {
          _id: item._id,
          flightNumber: item.flightNumber || "",
          departureDateTime: item.departureDateTime || "",
          arrivalDateTime: item.arrivalDateTime || "",
          airline: item.airline ? item.airline.airlineName : "",
          price: item.price || 0.0,
          distance: item.distance || 0.0,
          departureCity: item.departureCity ? item.departureCity.cityName : "",
          arrivalCity: item.arrivalCity ? item.arrivalCity.cityName : "",
          totalCo2Emission: item.totalCo2Emission || 0.0,
        };

        return <FlightCard flightDetails={flightDetails} />;
      })}
    </div>
  );
};

export default QueryResult;
