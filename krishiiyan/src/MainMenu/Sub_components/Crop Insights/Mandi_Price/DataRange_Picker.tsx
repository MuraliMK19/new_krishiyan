import React, { useState } from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameDay,
    isWithinInterval
} from "date-fns";
import { FiCalendar } from "react-icons/fi";
import EastIcon from '@mui/icons-material/East';

interface DateRangePickerProps {
    onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

const DateRange_Picker: React.FC<DateRangePickerProps> = ({ onDateChange }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [tempStartDate, setTempStartDate] = useState<Date | null>(null);
    const [tempEndDate, setTempEndDate] = useState<Date | null>(null);
    // const [currentMonth, setCurrentMonth] = useState(new Date());
    const [nextMonth, setNextMonth] = useState(addMonths(new Date(), 1));

    const [currentMonth, setCurrentMonth] = useState(new Date()); // Current month
    const [prevMonth, setPrevMonth] = useState(subMonths(new Date(), 1)); // Previous month


    const handleDateClick = (date: Date) => {
        const today = new Date();
        if (date > today) return; // Prevent selecting future dates

        if (!tempStartDate || (tempStartDate && tempEndDate)) {
            setTempStartDate(date);
            setTempEndDate(null);
        } else if (tempStartDate && !tempEndDate) {
            if (date < tempStartDate) {
                setTempEndDate(tempStartDate);
                setTempStartDate(date);
            } else {
                setTempEndDate(date);
            }
        }
    };


    const handleDone = () => {
        setStartDate(tempStartDate);
        setEndDate(tempEndDate);
        setShowCalendar(false);
        onDateChange(tempStartDate, tempEndDate);
    };

    const handleCancel = () => {
        setTempStartDate(null);
        setTempEndDate(null);
        setShowCalendar(false);
    };
    const handleClear = () => {
        setTempStartDate(null);
        setTempEndDate(null);
    }

    const generateCalendarDays = (month: Date) => {
        const start = startOfMonth(month);
        const end = endOfMonth(month);
        const days = eachDayOfInterval({ start, end });

        const firstDayIndex = start.getDay(); // 0 (Sunday) to 6 (Saturday)
        const emptySlots = Array(firstDayIndex).fill(null); // Empty placeholders for alignment

        return [...emptySlots, ...days];
    };

    const renderCalendar = (month: Date, setMonth: React.Dispatch<React.SetStateAction<Date>>) => {
        const days = generateCalendarDays(month);

        return (
            <div className="w-64 p-2 bg-white rounded-md">
                <div className="flex justify-evenly items-center mb-2">
                    <KeyboardBackspaceIcon className="cursor-pointer border-2 m-2 rounded-md"
                        onClick={() => setMonth(subMonths(month, 1))}
                    />
                    <span className="font-semibold">{format(month, "MMMM yyyy")}</span>
                    <EastIcon className="cursor-pointer border-2 m-2 rounded-md"
                        onClick={() => setMonth(addMonths(month, 1))}
                    />
                </div>
                <div className="grid grid-cols-7 text-sm text-gray-600">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div key={day} className="text-center font-medium">{day}</div>
                    ))}
                    {days.map((day, index) => (
                        day ? (  // Skip null values
                            <div
                                key={day.toString()}
                                className={`cursor-pointer p-1 text-center rounded-md ${isSameDay(day, tempStartDate!) || isSameDay(day, tempEndDate!)
                                    ? "bg-green-500 text-white"
                                    : tempStartDate && tempEndDate && isWithinInterval(day, { start: tempStartDate, end: tempEndDate })
                                        ? "bg-green-200"
                                        : "hover:bg-gray-200"
                                    }`}
                                onClick={() => handleDateClick(day)}
                            >
                                {format(day, "d")}
                            </div>
                        ) : (
                            <div key={`empty-${index}`} className="p-1 text-center"></div> // Placeholder for alignment
                        )
                    ))}
                </div>
                <hr />
            </div>
        );
    };

    return (
        <div className="relative">
            <button
                className="flex items-center border-2 border-[#616161] rounded-md h-10 px-2 ml-0 bg-white text-[#676767] w-32"
                onClick={() => setShowCalendar(!showCalendar)}
            >
                <FiCalendar className="mr-2" />
                {startDate ? format(startDate, "dd MMM yyyy") : "Select Date"}  {endDate ? format(endDate, "dd MMM yyyy") : ""}
            </button>

            {showCalendar && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4">
                    <div className="flex gap-4">
                        {renderCalendar(prevMonth, setPrevMonth)} {/* Previous Month */}
                        {renderCalendar(currentMonth, setCurrentMonth)} {/* Current Month */}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end">
                        <button
                            className="px-4 py-0 border rounded-md bg-white h-6 text-gray-700 hover:bg-gray-200"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                        <button
                            className="px-4 py-0 border rounded-md bg-white h-6 text-gray-700 hover:bg-gray-200"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-0 bg-green-500 h-6 text-white rounded-md hover:bg-green-600"
                            onClick={handleDone}
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateRange_Picker;
