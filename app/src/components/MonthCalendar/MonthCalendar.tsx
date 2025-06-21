import { useContext } from "react";
import { generateCalendarDays } from "../../utils/calendarUtils";
import { CalendarContext } from "../../context/CalendarProvider";
import DateCell from "./DateCell";

const MonthCalendar: React.FC = () => {
    const {viewMonth} = useContext(CalendarContext);

    const dates:Date[] = generateCalendarDays(viewMonth);


    return (
        <div className="grid grid-cols-7 gap-0 p-0">
            {dates.map((date, idx) => (
                <DateCell date={date} isCurrentMonth={date.getMonth() === viewMonth.getMonth()} />
            ))}
        </div>
    )
};

export default MonthCalendar;