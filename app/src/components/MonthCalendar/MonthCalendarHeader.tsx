import { generateCalendarHeaderLabels } from "../../utils/calendarUtils";

const MonthCalendarHeader: React.FC = () => {
    const labels = generateCalendarHeaderLabels();

    return (
        <div className="grid grid-cols-7 text-center font-bold text-gray-600 p-0 gap-0">
            {labels.map((label, idx) => (
                <div key={idx} className="border gap-0 py-2">
                    {label}
                </div>
            ))}
        </div>
    );
};

export default MonthCalendarHeader;