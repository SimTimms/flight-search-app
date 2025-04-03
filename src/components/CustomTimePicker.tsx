import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";

interface CustomTimePickerProps {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
  label: string;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  value,
  onChange,
  label,
}: CustomTimePickerProps) => {
  return (
    <TimePicker
      value={value}
      label={label}
      onChange={(newValue) => {
        onChange(newValue || dayjs());
      }}
      ampm={false}
      timeSteps={{ minutes: 5 }}
    />
  );
};
export default CustomTimePicker;
