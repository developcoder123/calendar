import { createContext, useState } from "react";

type CalendarContextType = {
    selectedMonth: Date;
    setSelectedMonth: (date: Date) => void;
}

export const CalendarContext = createContext<CalendarContextType>({
    selectedMonth: new Date(),
    setSelectedMonth: () => {},
});

export const PrevMonth = (current: Date) => {
    const prev = new Date(current);
    prev.setMonth(prev.getMonth() - 1);
    return prev;
}

export const NextMonth = (current: Date) => {
    const next = new Date(current);
    next.setMonth(next.getMonth() + 1);
    return next;
}

export function CalendarProvider({children}: any) {
    const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

    return (
        <CalendarContext.Provider value={{selectedMonth, setSelectedMonth}}>
            {children}
        </CalendarContext.Provider>
    )
}