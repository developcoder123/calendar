
type Props = {
    date: string,
    selectedSlots: Set<number>,
    onSelectionChange: (date:string, selected: Set<number>) => void,
};

const generateTimeSlots = (): string[] => {
    const times:string[] = [];
    for(let h = 0; h < 24; h++) {
        for(let m = 0; m < 60; m += 5) {
            times.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
        }
    }
    times.push('24:00');
    return times;
};

const TimeGridSelectable: React.FC<Props> = ({ date, selectedSlots, onSelectionChange }) => {
    const timeSlots = generateTimeSlots();
    let isDragging = false;

    const handleMouseDown = (idx: number) => {
        isDragging = true;
        const newSet = new Set([idx]);
        onSelectionChange(date, newSet);
    };

    const handleMouseOver = (idx: number) => {
        if(!isDragging) return;
        onSelectionChange(date, new Set([...selectedSlots, idx]));
    };

    const handleMouseUp = () => {
        isDragging = false;
    };

    return (
        <div onMouseUp={handleMouseUp} className="m-1" style={{ userSelect: 'none', maxHeight: '90vh', overflowY: 'auto', border: '1px solid #ccc' }}>
            <table border={1} cellPadding={4} style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <th colSpan={2}
                        style={{
                            position: 'sticky',
                            top: '0',
                            background: '#ffffff',
                            padding: '8px',
                            borderBottom: '1px solid #ccc',
                        }}
                        >{date}</th>
                    </tr>
                    <tr>
                        <th
                            style={{
                                position: 'sticky',
                                top: '2.5rem',
                                background: '#ffffff',
                                borderBottom: '1px solid #ccc',
                                padding: '4px',
                            }}
                        >時間
                        </th>
                        <th
                            style={{
                                position: 'sticky',
                                top: '2.5rem',
                                background: '#ffffff',
                                borderBottom: '1px solid #ccc',
                                padding: '4px',
                            }}

                        >予定
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((time, idx) => (
                        <tr key={idx}>
                            <td
                                style={{
                                    fontSize: '5px',
                                    height: '5px',
                                    lineHeight: '1',
                                    whiteSpace: 'nowrap',
                                    borderBottom: '1px solid #eee',
                                }}>
                                {time}
                            </td>
                            <td
                                onMouseDown={() => handleMouseDown(idx)}
                                onMouseOver={() => handleMouseOver(idx)}
                                style={{
                                    backgroundColor: selectedSlots.has(idx) ? '#b3d4fc' : 'white',
                                    cursor: 'pointer',
                                    lineHeight: '1',
                                    whiteSpace: 'nowrap',
                                    borderBottom: '1px solid #eee',

                                }}
                            ></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimeGridSelectable;