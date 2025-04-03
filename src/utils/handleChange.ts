import { SearchFormState } from "../types/index";
import { Dayjs } from "dayjs";

const handleChange = (
  setFormState: React.Dispatch<React.SetStateAction<SearchFormState>>,
  key: string,
  mergedKey: string,
  newValue: string | Dayjs | null
) => {
  setFormState((prevState) => ({
    ...prevState,
    [key]: newValue,
    [mergedKey]: newValue,
  }));
};

export default handleChange;
