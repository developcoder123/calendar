import GridCalendar from "./GridCalendar/GridCalendar";
import MonthCalendar from "./MonthCalendar/MonthCalendar";

const Calendar: React.FC = () => {
    return (
        <>
            <MonthCalendar />
            <GridCalendar />
        </>
    )
};

export default Calendar;