import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarProvider";
import { isSameDay } from "../../utils/dateUtils";
import { CalendarConfig } from "../../config/calendarConfig";

const MonthCalendarNavigator: React.FC = () => {
    const {viewMonth, setViewMonth} = useContext(CalendarContext);

     const isPrevDisabled = isSameDay(viewMonth, CalendarConfig.minDate) || viewMonth < CalendarConfig.minDate;
     const isNextDisabled = isSameDay(viewMonth, CalendarConfig.maxDate) || viewMonth > CalendarConfig.maxDate;

     /**
      * Prevボタン押下時イベント
      * @param current 
      * @returns 
      */
     const PrevMonth = (current: Date) => {
         const prev = new Date(current);
         if(isSameDay(current, CalendarConfig.minDate) || current < CalendarConfig.minDate) {
             return current;
         }
         prev.setMonth(prev.getMonth() - 1);
         return prev;
     }
     
     /**
      * Nextボタン押下時イベント
      * @param current 
      * @returns 
      */
     const NextMonth = (current: Date) => {
         const next = new Date(current);
         if(isSameDay(current, CalendarConfig.maxDate) || current > CalendarConfig.maxDate) {
             return current;
         }
         next.setMonth(next.getMonth() + 1);
         return next;
    }

    return (
        <div className="p-2 flex text-center justify-left">
            <button type="button" 
                    onClick={() => setViewMonth(PrevMonth(viewMonth))} 
                    className={`p-2 rounded w-20 m-2 ${
                        isPrevDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}>
                    ＜
            </button>

            <button type="button" 
                    onClick={() => setViewMonth(NextMonth(viewMonth))} 
                    className={`px-3 rounded w-20 m-2 ${
                        isNextDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"
                      }`}>
                    ＞
            </button>

            <div className="p-2 m-2">
                <span className="text-lg">{viewMonth.getFullYear()}年 {viewMonth.getMonth()+1}月</span>
            </div>

            <button type="button" 
                    onClick={() => setViewMonth(new Date())} 
                    className="px-3 rounded w-20 m-2 bg-blue-500 text-white">
                    今月
            </button>
        </div>
    )
};

export default MonthCalendarNavigator;