import CustomDatePicker from "./CustomDatePicker";
import CustomTimePicker from "./CustomTimePicker";
import { Dayjs } from "dayjs";
import { SearchFormState } from "../types/index";
import "./DateTime.css";
import handleChange from "../utils/handleChange";
import { mergeTimeDate } from "../utils/mergeTimeDate";

interface DateTimeProps {
  valueDate: Dayjs;
  valueTime: Dayjs;
  label: string;
  setFormState: React.Dispatch<React.SetStateAction<SearchFormState>>;
  keys: { dateKey: string; timeKey: string; mergeKey: string };
}

const DateTime: React.FC<DateTimeProps> = ({
  valueTime,
  valueDate,
  setFormState,
  label,
  keys,
}) => {
  return (
    <div className="date-time-picker">
      <CustomDatePicker
        value={valueDate}
        onChange={(date: Dayjs) => {
          const mergedDate = mergeTimeDate(date, valueTime);
          handleChange(setFormState, keys.dateKey, keys.mergeKey, mergedDate);
        }}
        label={`${label} Date`}
      />
      <CustomTimePicker
        value={valueTime}
        onChange={(time: Dayjs) => {
          const mergedDate = mergeTimeDate(valueDate, time);
          handleChange(setFormState, keys.timeKey, keys.mergeKey, mergedDate);
        }}
        label={`${label} Time`}
      />
    </div>
  );
};
export default DateTime;
