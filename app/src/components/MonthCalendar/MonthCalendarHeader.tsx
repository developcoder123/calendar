import { useContext } from "react";
import { CalendarContext, NextMonth, PrevMonth } from "../../context/CalendarProvider";

const MonthCalendarHeader: React.FC = () => {
    const {selectedMonth, setSelectedMonth} = useContext(CalendarContext);
    return (
        <div className="">
            <button type="button" className="" onClick={() => setSelectedMonth(PrevMonth(selectedMonth))}>＜ </button>
            <span>{selectedMonth.getFullYear()}年 </span>
            <span>{selectedMonth.getMonth()+1}月</span>
            <button onClick={() => setSelectedMonth(NextMonth(selectedMonth))}> ＞</button>
        </div>
    )
};

export default MonthCalendarHeader;