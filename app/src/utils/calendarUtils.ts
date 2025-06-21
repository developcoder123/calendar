import { CalendarConfig } from "../config/calendarConfig";
import { getStartOfMonth, getLastOfMonth } from "./dateUtils";

export const generateCalendarDays = (date: Date): Date[] => {
    const dates: Date[] = [];

    const firstDay = getStartOfMonth(new Date(date.getFullYear(), date.getMonth(), 1)); // 月初
    const lastDay  = getLastOfMonth(new Date(date.getFullYear(), date.getMonth(), 1));  // 月末

    const startDayOfWeek = firstDay.getDay();

    for(let i = 0; i < 42; i++) {
        const date = new Date(firstDay);
        date.setDate(i - startDayOfWeek + CalendarConfig.startDayOfWeek + 1);
        dates.push(date);
    }

    return dates;
}

export const generateCalendarHeaderLabels = (): string[] => {
    const {startDayOfWeek, dayLabels} = CalendarConfig;

    // 曜日を回転（例：月曜始まりなら ["月", "火", ..., "日"]）
    return [...dayLabels.slice(startDayOfWeek), ...dayLabels.slice(0, startDayOfWeek)];
}