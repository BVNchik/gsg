import { add, format, differenceInCalendarDays } from "date-fns";

export function getTicks({
  startDate,
  endDate,
}: {
  startDate?: Date | null;
  endDate?: Date | null;
}): number[] {
  if (!endDate || !startDate) return [];
  const diffDays = differenceInCalendarDays(endDate, startDate);
  const ticks = [startDate.getTime()];
  for (let i = 1; i < diffDays; i++) {
    ticks.push(add(startDate, { days: i }).getTime());
  }
  ticks.push(endDate.getTime());
  return ticks;
}

export function dateFormatter(date: Date | number) {
  return format(date, "dd/MMM");
}
