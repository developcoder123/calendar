import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarProvider";
import { isSameDay } from "../../utils/dateUtils";
import { CalendarConfig } from "../../config/calendarConfig";

const MonthCalendarHeader: React.FC = () => {
    const {selectedMonth, setSelectedMonth} = useContext(CalendarContext);

     const isPrevDisabled = isSameDay(selectedMonth, CalendarConfig.minDate) || selectedMonth < CalendarConfig.minDate;
     const isNextDisabled = isSameDay(selectedMonth, CalendarConfig.maxDate) || selectedMonth > CalendarConfig.maxDate;

     const PrevMonth = (current: Date) => {
         const prev = new Date(current);
         if(isSameDay(current, CalendarConfig.minDate) || current < CalendarConfig.minDate) {
             return current;
         }
         prev.setMonth(prev.getMonth() - 1);
         return prev;
     }
     
     const NextMonth = (current: Date) => {
         const next = new Date(current);
         if(isSameDay(current, CalendarConfig.maxDate) || current > CalendarConfig.maxDate) {
             return current;
         }
         next.setMonth(next.getMonth() + 1);
         return next;
    }

    return (
        <div className="">
            <button type="button" 
                    onClick={() => setSelectedMonth(PrevMonth(selectedMonth))} 
                    className={`px-3 py-1 rounded ${
                        isPrevDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}>
                    ＜ 
            </button>
            <span>{selectedMonth.getFullYear()}年 </span>
            <span>{selectedMonth.getMonth()+1}月</span>
            <button type="button" 
                    onClick={() => setSelectedMonth(NextMonth(selectedMonth))} 
                    className={`px-3 py-1 rounded ${
                        isNextDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}>
                     ＞
            </button>
        </div>
    )
};

export default MonthCalendarHeader;