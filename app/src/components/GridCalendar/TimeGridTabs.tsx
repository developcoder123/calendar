import { useState } from "react";
import TimeGridSelectable from "./TimeGridSelectable";

const dates = ['2025/06/21', '2025/06/22'];

type SelectionMap = Record<string, Set<number>>;

const TimeGridTabs: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('2025/06/21');
    const [selectionMap, setSelectionMap] = useState<SelectionMap>(() =>
        Object.fromEntries(dates.map((d) => [d, new Set()]))
    );

    const handleSelectionChange = (date: string, selected: Set<number>) => {
        setSelectionMap((prev) => ({
            ...prev,
            [date]: selected,
        }));
    };

    const selectedDates = dates.filter((date) => selectionMap[date]?.size > 0);
    const showMultipleTab = selectedDates.length >= 2;

    const renderGrid = (targetDates: string[]): React.ReactNode => {
        return (
            <div>
                {targetDates.map((date) => (
                    <div key={date} style={{marginBottom: '2rem'}}>
                        <TimeGridSelectable
                            date={date}
                            selectedSlots={selectionMap[date]}
                            onSelectionChange={handleSelectionChange}
                        />
                    </div>
                ))}
            </div>
        )
    };

    return (
        <div>
            <div style={{marginBottom: '1rem'}}>
                {dates.map((date) => (
                    <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        style={{
                            marginRight: '0.5rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: selectedDate === date ? '#007bff' : '#f0f0f0',
                            border: 'none',
                            borderRadius: '4px',
                        }}
                    >
                        {date}
                    </button>
                ))}
            </div>
            {selectedDate === 'multiple'
                ? renderGrid(selectedDates)
                : renderGrid([selectedDate])}
        </div>
    );

};

export default TimeGridTabs;