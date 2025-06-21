import { createContext, useState } from "react";
import { getStartOfMonth } from "../utils/dateUtils";

type CalendarContextType = {
    viewMonth: Date;
    setViewMonth: (date: Date) => void;
}

export const CalendarContext = createContext<CalendarContextType>({
    viewMonth: new Date(),
    setViewMonth: () => {},
});

export function CalendarProvider({children}: any) {
    const [viewMonth, setViewMonth] = useState<Date>(getStartOfMonth(new Date()));

    return (
        <CalendarContext.Provider value={{viewMonth, setViewMonth}}>
            {children}
        </CalendarContext.Provider>
    )
}
