import { useState } from "react";
import { parse, addDays, addMonths, subMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay } from "date-fns";
import './calendar.css';

function CalendarComp() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const onDateClick = (day) => {
        setSelectedDate(day);
    }

    const nextMonth = () => {        
        setCurrentMonth(addMonths(currentMonth, 1));        
    }

    const prevMonth = () => {      
        setCurrentMonth(subMonths(currentMonth, 1));   
    }

    const renderDays = () => {
        const dateFormat = "eee";
        const days = [];
        let startDate = startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center weeknameClass" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${!isSameMonth(day, monthStart)
                            ? "disabled"
                            : isSameDay(day, selectedDate) ? "selected" : ""
                            }`}

                        key={day}
                        onClick={() => onDateClick(parse(cloneDay))}
                    >
                        <span className="number">{isSameMonth(day, monthStart) ? formattedDate : ''}</span>
                        <span className="bg">{isSameMonth(day, monthStart) ? formattedDate : ''}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    return (
        <div className="calendar">
           
            {renderDays()}
            {renderCells()}
        </div>
    );
}

export default CalendarComp;