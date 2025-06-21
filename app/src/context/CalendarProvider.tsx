import { createContext, useState } from "react";
import { getStartOfMonth } from "../utils/dateUtils";
import { CalendarConfig } from "../config/calendarConfig";
import { isSameDay } from "../utils/dateUtils";

type CalendarContextType = {
    selectedMonth: Date;
    setSelectedMonth: (date: Date) => void;
}

export const CalendarContext = createContext<CalendarContextType>({
    selectedMonth: new Date(),
    setSelectedMonth: () => {},
});

export function CalendarProvider({children}: any) {
    const [selectedMonth, setSelectedMonth] = useState<Date>(getStartOfMonth(new Date()));

    return (
        <CalendarContext.Provider value={{selectedMonth, setSelectedMonth}}>
            {children}
        </CalendarContext.Provider>
    )
}
