import { CalendarProvider } from "../context/CalendarProvider";
import GridCalendar from "./GridCalendar/GridCalendar";
import MonthCalendar from "./MonthCalendar/MonthCalendar";
import MonthCalendarHeader from "./MonthCalendar/MonthCalendarHeader";
import MonthCalendarNavigator from "./MonthCalendar/MonthCalendarNavigator";

const Calendar: React.FC = () => {
    return (
        <>
            <CalendarProvider>
                <div className="flex w-full">
                    <div className="w-[75%]">
                        <MonthCalendarNavigator />
                        <div className="m-2">
                            <MonthCalendarHeader />
                            <MonthCalendar />
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <GridCalendar />
                    </div>
                </div>
            </CalendarProvider>
        </>
    )
};

export default Calendar;