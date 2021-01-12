import React, { useState } from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";

const ExpenseListFilters = (props) => {
    const [calendarFocused, setCalendarFocused] = useState(null);

    const onDatesChange = ({ startDate, endDate }) => {
        props.setStartDate(startDate);
        props.setEndDate(endDate);
    };
    const onFocusChange = (calendarFocused) => {
        setCalendarFocused(calendarFocused);
    };
    const onTextChange = (e) => {
        props.setTextFilter(e.target.value);
    };
    const onSortChange = (e) => {
        if (e.target.value === "date") {
            props.sortByDate();
        } else if (e.target.value === "amount") {
            props.sortByAmount();
        }
    };

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input
                        type="text"
                        className="text-input"
                        value={props.filters.text}
                        onChange={onTextChange}
                        placeholder="Search Code"
                    />
                </div>
                <div className="input-group__item">
                    <select className="select" value={props.filters.sortBy} onChange={onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={props.filters.startDate}
                        endDate={props.filters.endDate}
                        onDatesChange={onDatesChange}
                        focusedInput={calendarFocused}
                        onFocusChange={onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter()),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
