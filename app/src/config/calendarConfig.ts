
export type startDayOfWeek = 0 | 1; // 0 = 日曜, 1 = 月曜

const minTargetYear = 2025;
const minTargetMonth = 1;
const maxTargetYear = 2025;
const maxTargetMonth = 12;
const dayLabels = [ 
    { 0: "日" },
    { 1: "月" },
    { 2: "火" },
    { 3: "水" },
    { 4: "木" },
    { 5: "金" },
    { 6: "土" },
];

export const CalendarConfig = {
    startDayOfWeek: 1 as startDayOfWeek,
    minDate: new Date(minTargetYear, minTargetMonth - 1, 1),
    maxDate: new Date(maxTargetYear, maxTargetMonth - 1, 1),
    dayLabels: dayLabels,
};
