import React, { useState, useEffect } from "react";
import { parse, addDays, addMonths, subMonths, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay } from "date-fns";
import './calendar.css';

const CalendarComp = React.memo((props) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDD, setSelectedDD] = useState('');

    const monthsArray = [{ month: 'january', index: 0 },
    { month: 'february', index: 1 },
    { month: 'march', index: 2 },
    { month: 'april', index: 3 },
    { month: 'may', index: 4 },
    { month: 'june', index: 5 },
    { month: 'july', index: 6 },
    { month: 'august', index: 7 },
    { month: 'september', index: 8 },
    { month: 'october', index: 9 },
    { month: 'november', index: 10 },
    { month: 'december', index: 11 }
    ];

    useEffect(() => {
        const month = format(new Date(), 'LLLL');
        let monthName = '';
        monthsArray.map((item, index) => {
            if (item.month.toLowerCase() === month.toLowerCase()) {
                monthName = item.month.toLowerCase();
            }
        })
        setSelectedDD(monthName);
    }, []);

    useEffect(() => {
        if (props.accIndex != null && props.accIndex != "") {
            const month = format(new Date(), 'LLLL');
            let monthName = '';
            monthsArray.map((item, index) => {
                if (item.month.toLowerCase() === month.toLowerCase()) {
                    monthName = item.month.toLowerCase();
                }
            })
            // document.getElementById("calendarOptionId").value = monthName;
            //document.getElementById("calendarOptionId").getElementsByTagName('option')[monthIndex].selected = 'selected';
            setSelectedDD(monthName);
        }
    }, [props.accIndex]);

    /*useEffect(() => {
        if (props.changedAccIndex != null && props.changedAccIndex != "") {
            props.currentMonth(format(new Date(), 'LLLL'));
        }
    }, [props.changedAccIndex]);*/

    /*useEffect(() => {
        if (props.modifiedDate != null && props.modifiedDate!= "") {
            setCurrentMonth(props.modifiedDate);
        }
    }, [props.modifiedDate]);*/

    const onDateClick = (day) => {
        setSelectedDate(day);
    }

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }

    const monthDropdownChange = (event) => {
        let monthIndex = 0;
        //setSelectedDDMonth(event.target.value.toLowerCase());
        let monthName = "";
        monthsArray.map((item, index) => {
            if (item.month.toLowerCase() === event.target.value.toLowerCase()) {
                monthIndex = index + 1;
                monthName = item.month.toLowerCase();
            }
        })
        const format = `2022/${monthIndex}/01`;
        const currentdate = new Date(format);
        //setChangedDate(currentdate);
        setCurrentMonth(currentdate);
        setSelectedDD(monthName);
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
        <div className="calendar" key={props.calendarIndex}>
            <select id="calendarOptionId" name="calendar" value={selectedDD} className="calendarClass" onChange={(e) => monthDropdownChange(e)}>
                <option value="january">January 2022</option>
                <option value="february">February 2022</option>
                <option value="march">March 2022</option>
                <option value="april">April 2022</option>
                <option value="may">May 2022</option>
                <option value="june">June 2022</option>
                <option value="july">July 2022</option>
                <option value="august">August 2022</option>
                <option value="september">September 2022</option>
                <option value="october">October 2022</option>
                <option value="november">November 2022</option>
                <option value="december">December 2022</option>
            </select>
            <br />
            {renderDays()}
            {renderCells()}
        </div>
    );
})

export default CalendarComp;