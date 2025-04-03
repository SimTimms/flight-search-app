import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface CustomDatePickerProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
  label: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  label,
}: CustomDatePickerProps) => {
  return (
    <DatePicker
      value={value}
      label={label}
      onChange={(newValue) => {
        onChange(newValue || dayjs()); // Fallback to current date if newValue is null
      }}
    />
  );
};
export default CustomDatePicker;
