import { Dayjs } from "dayjs";

export const mergeTimeDate = (date: Dayjs, time: Dayjs): Dayjs => {
  const mergedDate = date.hour(time.hour()).minute(time.minute());
  return mergedDate;
};
