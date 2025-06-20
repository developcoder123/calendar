import { useContext } from "react";
import { CalendarContext, NextMonth, PrevMonth } from "../../context/CalendarProvider";
import { isSameDay } from "../../utils/dateUtils";
import { CalendarConfig } from "../../config/calendarConfig";

const MonthCalendarHeader: React.FC = () => {
    const {selectedMonth, setSelectedMonth} = useContext(CalendarContext);

     const isPrevDisabled = isSameDay(selectedMonth, CalendarConfig.minDate) || selectedMonth < CalendarConfig.minDate;

    return (
        <div className="">
            <button type="button" 
                    onClick={() => setSelectedMonth(PrevMonth(selectedMonth))} 
                    disabled={isPrevDisabled}
                    className={`px-3 py-1 rounded ${
                        isPrevDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}>
                    ＜ 
            </button>
            <span>{selectedMonth.getFullYear()}年 </span>
            <span>{selectedMonth.getMonth()+1}月</span>
            <button onClick={() => setSelectedMonth(NextMonth(selectedMonth))}> ＞</button>
        </div>
    )
};

export default MonthCalendarHeader;