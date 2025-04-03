import { SearchFormState } from "../types/index";
import { Dayjs } from "dayjs";

const handleChangeToNumber = (
  setFormState: React.Dispatch<React.SetStateAction<SearchFormState>>,
  key: string,
  newValue: string | Dayjs | null
) => {
  setFormState((prevState) => ({
    ...prevState,
    [key]: newValue ? parseInt(newValue as string, 10) : 0,
  }));
};

export default handleChangeToNumber;
