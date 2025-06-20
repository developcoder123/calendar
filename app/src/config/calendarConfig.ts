
export type startDayOfWeek = 0 | 1; // 0 = 日曜, 1 = 月曜

export const CalendarConfig = {
    startDayOfWeek: 1 as startDayOfWeek,
    minDate: new Date(2025, 0, 1),
    maxDate: new Date(2030, 11,31),
    dayLabels: ["月", "火", "水", "木", "金", "土", "日"],
};

