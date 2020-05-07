import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
} from "../../actions/filters";
import moment from "moment";

test("Should set text filter w arguments", () => {
    const text = "this is the filter";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text,
    });
});

test("Should set text filter w default", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "",
    });
});

test("Should generate action object for date", () => {
    const action = sortByDate();
    expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("Should generate action object for amount", () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("Should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({ type: "SET_START_DATE", startDate: moment(0) });
});

test("Should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({ type: "SET_END_DATE", endDate: moment(0) });
});
