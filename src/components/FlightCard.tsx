import { FlightType } from "../types";
import "./FlightCard.css";

interface FlightCardProps {
  flightDetails: FlightType;
}

const FlightCard: React.FC<FlightCardProps> = ({ flightDetails }) => {
  const {
    flightNumber,
    departureDateTime,
    arrivalDateTime,
    airline,
    price,
    distance,
    departureCity,
    arrivalCity,
    totalCo2Emission,
  } = flightDetails;

  return (
    <div className="flight-card">
      <div>
        <div>
          <h2 className="text-xl font-bold">
            {`${
              airline === "" ? "My Airline" : airline
            } - ${flightNumber} - £${price?.toFixed(2)}`}{" "}
          </h2>
        </div>
        <h3>
          Co2: {totalCo2Emission?.toFixed(1)}kg over {distance.toFixed(1)}km
        </h3>
      </div>
      <p className="text-gray-600">
        <b>Departing:</b>
        <br />
        {departureCity === "" ? "Unknown City" : departureCity} <br />
        {new Date(departureDateTime).toLocaleString()}
      </p>
      <p className="text-gray-600">
        <b>Arriving:</b>
        <br />
        {arrivalCity === "" ? "Unknown City" : arrivalCity} <br />
        {new Date(arrivalDateTime).toLocaleString()}
      </p>
    </div>
  );
};

export default FlightCard;
