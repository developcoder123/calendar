import { format } from "date-fns";
import type { ReactElement, ReactNode } from "react";

type Props = {
    date: Date,
    isCurrentMonth: boolean,
}

export const onDateClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // alert((e.target as HTMLDivElement).id);
}

const DateCell = ({date, isCurrentMonth}: Props) => {

    const targetDate = format(date, "yyyyMMdd");

    return (
        <div className={`
                border border-solid h-24 hover:bg-slate-100 p-1}
                ${!isCurrentMonth ? "bg-gray-100 text-gray-400" : ""}`}
            id={targetDate}
            onClick={onDateClick}
            >
            {date.getDate()}
        </div>
    )
};

export default DateCell;