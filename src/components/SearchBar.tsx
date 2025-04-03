import DateTime from "./DateTime";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import handleChangeToNumber from "../utils/handleChangeToNumber";
import { SearchFormState } from "../types";

interface SearchFormStateProps {
  formState: SearchFormState;
  setFormState: React.Dispatch<React.SetStateAction<SearchFormState>>;
}
const SearchBar: React.FC<SearchFormStateProps> = ({
  formState,
  setFormState,
}) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTime
          valueDate={formState.departureDate}
          valueTime={formState.departureTime}
          setFormState={setFormState}
          label="Departure"
          keys={{
            dateKey: "departureDate",
            timeKey: "departureTime",
            mergeKey: "departureDateTime",
          }}
        />
        <DateTime
          valueDate={formState.arrivalDate}
          valueTime={formState.arrivalTime}
          setFormState={setFormState}
          label="Arrival"
          keys={{
            dateKey: "arrivalDate",
            timeKey: "arrivalTime",
            mergeKey: "arrivalDateTime",
          }}
        />
      </LocalizationProvider>
      <TextField
        type="number"
        label="Number of Passengers"
        name="numberOfPassengers"
        value={formState.numberOfPassengers}
        onChange={(e) =>
          handleChangeToNumber(
            setFormState,
            "numberOfPassengers",
            e.target.value
          )
        }
        placeholder="Passengers"
      />
    </>
  );
};
export default SearchBar;
