import { CalendarProvider } from "../context/CalendarProvider";
import GridCalendar from "./GridCalendar/GridCalendar";
import MonthCalendar from "./MonthCalendar/MonthCalendar";

const Calendar: React.FC = () => {
    return (
        <>
            <CalendarProvider>
                <MonthCalendar />
                <GridCalendar />
            </CalendarProvider>
        </>
    )
};

export default Calendar;