
export type StartDayOfWeek = 0 | 1; // 0 = 日曜, 1 = 月曜

const startDayOfWeek = 1; // 0 = 日曜, 1 = 月曜
const minTargetYear = 2025;
const minTargetMonth = 1;
const maxTargetYear = 2025;
const maxTargetMonth = 10;
const dayLabels = ["日", "月", "火", "水", "木", "金", "土"];

export interface CalendarConfigType {
  startDayOfWeek: StartDayOfWeek;
  minDate: Date;
  maxDate: Date;
  dayLabels: string[];
}

export const CalendarConfig: CalendarConfigType = {
    startDayOfWeek: startDayOfWeek as StartDayOfWeek,
    minDate: new Date(minTargetYear, minTargetMonth - 1, 1),
    maxDate: new Date(maxTargetYear, maxTargetMonth - 1, 1),
    dayLabels: dayLabels,
};