import filtersReducer from "../../reducers/filters";
import moment from "moment";
import filters from "../../reducers/filters";

test("Should set up default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    });
});

test("Should set sortBy to amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    };
    const action = { type: "SORT_BY_DATE" };
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe("date");
});

test("Should set text filter", () => {
    const text = "this filter";
    const action = { type: "SET_TEXT_FILTER", text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test("Should set start date filter", () => {
    const startDate = moment(0).add(1, "day");
    const action = { type: "SET_START_DATE", startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test("Should set end date filter", () => {
    const endDate = moment(0).subtract(1, "day");
    const action = { type: "SET_END_DATE", endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});
